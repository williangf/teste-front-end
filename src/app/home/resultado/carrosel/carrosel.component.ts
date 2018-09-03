import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PesquisaService } from '../../../pesquisa.service';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css'],
  animations: [
    trigger('carrosel', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void => *', animate('0.5s ease-in'))
    ])
  ]
})
export class CarroselComponent implements OnInit {

  public resultados: string[];
  public quantidadeQuadrosCarrosel: number = 3;
  public duracaoAnimacaoCarrosel: number = 3000; //ms

  public resultadosEmExibicao: Array<any> = [];
  public contadorCarrosel: number = 0;

  public onHoverCarroselValor: boolean = false;

  constructor(private pesquisaService: PesquisaService) { }

  ngOnInit() {

    this.resultados = this.pesquisaService.resultados;

    //Forçar apenas um quadro se for mobile, tablets, etc
    if (window.innerWidth < 768) {
      this.quantidadeQuadrosCarrosel = 1;
    }

    this.logicaCarrosel(this.quantidadeQuadrosCarrosel, this.duracaoAnimacaoCarrosel);

  }

  public logicaCarrosel(numeroQuadros: number, tempoAnimacao: number): void {

    //(mouseleave) parece estar falhando após alguns cliques nos botões de avançar e retroceder [apenas se manter o mouse completamente parado]
    if (this.onHoverCarroselValor === false) {

      if (this.contadorCarrosel > (this.resultados.length)) {
        this.contadorCarrosel = 1;
      }

      this.logicaOrdenacao();

      this.contadorCarrosel++;
    }

    setTimeout(() => {
      this.logicaCarrosel(numeroQuadros, tempoAnimacao);
    }, tempoAnimacao);

  }

  public onHoverCarrosel(valor: boolean): void {
    this.onHoverCarroselValor = valor;
  }

  public movimentarCarrosel(direcao: string): void {

    this.onHoverCarroselValor = true;


    if (direcao === 'next') {

      //Botão de avançar
      if (this.contadorCarrosel > (this.resultados.length)) {
        this.contadorCarrosel = 1;
      }

      this.logicaOrdenacao();
      this.contadorCarrosel++;

    } else {

      //Botão de retroceder
      if (this.contadorCarrosel < 1) {
        this.contadorCarrosel = this.resultados.length;
      }

      this.logicaOrdenacao();
      this.contadorCarrosel--;

    }
  }

  //Lógica base da rotação, para diminuir o código
  public logicaOrdenacao(): void {

    this.resultadosEmExibicao = [];

    let contador: number = 1;

    for (let i: number = (this.contadorCarrosel); i < (this.resultados.length + this.quantidadeQuadrosCarrosel); i++) {

      if (contador > this.quantidadeQuadrosCarrosel) {
        break;
      } else {

        if (i + 1 > this.resultados.length) {
          this.resultadosEmExibicao.push(this.resultados[i - this.resultados.length]);
        } else {
          this.resultadosEmExibicao.push(this.resultados[i]);
        }

        contador++;

      }

    }
  }

  public atualizaCarrosel(resultados: string[]): void {
    this.resultados = resultados;

    this.contadorCarrosel = 0;

    this.logicaOrdenacao();

    this.contadorCarrosel++;
  }

}
