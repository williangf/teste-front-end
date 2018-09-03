import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PesquisaService } from '../../pesquisa.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() public resultados: string[];

  @ViewChild('carrosel') public carrosel: any;

  public ultimoTermo: string;
  public ultimoToken: string;
  public carregandoPaginacao: boolean;

  constructor(private pesquisaService: PesquisaService) { }

  ngOnInit() {
    this.ultimoTermo = this.pesquisaService.ultimoTermo;
    this.ultimoToken = this.pesquisaService.ultimoToken;
  }

  public paginarPesquisa(event: string) {
    this.pesquisaService.paginacao(event)
      .subscribe((resposta: any) => {
        this.resultados = resposta.items;
        this.carregandoPaginacao = false;
        this.ultimoToken = this.pesquisaService.ultimoToken;
        this.carrosel.atualizaCarrosel(this.resultados);
      });
  }

  public atualizarCarrosel(resultados: string[]): void {
    this.carrosel.atualizaCarrosel(resultados);
  }

}
