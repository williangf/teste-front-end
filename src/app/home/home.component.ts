import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PesquisaService } from '../pesquisa.service';
import { Resultado } from './resultado.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public resultados: Resultado[] = [];

  public estadoInicial: boolean = false;
  public animacao: boolean = false;
  public semAnimacao: boolean = false;
  public valorInput: string;

  public ultimoTermo: string;
  public ultimoToken: string;

  @ViewChild('resultado') public resultado: any;

  public formulario: FormGroup = new FormGroup({
    'pesquisa': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
  });

  constructor(private pesquisaService: PesquisaService) { }

  ngOnInit() {

    //Carregar resultados caso já tenha pesquisado algo ou usado a paginação
    this.ultimoTermo = this.pesquisaService.ultimoTermo;
    this.ultimoToken = this.pesquisaService.ultimoToken;

    if (this.ultimoTermo !== undefined && this.ultimoToken !== undefined) {
      this.pesquisaService.paginacao('last')
        .subscribe((resposta: any) => {

          this.homeCarregado(this.ultimoTermo, resposta);

        });
    } else {
      if (this.ultimoTermo !== undefined && this.ultimoToken === undefined) {
        this.pesquisaService.getResultados(this.ultimoTermo)
          .subscribe((resposta: any) => {

            this.homeCarregado(this.ultimoTermo, resposta);

          });
      }
    }

  }

  public pesquisar(): void {

    this.pesquisaService.getResultados(this.formulario.value.pesquisa)
      .subscribe((resposta: any) => {
        if (this.animacao === false) {
          setTimeout(() => { // Esperar animação do input para o topo
            this.resultados = resposta.items;
            this.estadoInicial = true;
          }, 1000);
        } else {
          this.resultados = resposta.items;
          this.resultado.atualizarCarrosel(this.resultados);
        }
        this.animacao = true;
      });
  }

  public homeCarregado(termo: string, resposta: any): void {
    this.resultados = resposta.items;
    this.semAnimacao = true;
    this.estadoInicial = true;
    this.valorInput = termo;
  }

}
