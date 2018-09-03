import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  @Output() paginarPesquisa: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public paginar(direcao: string): void {
    this.paginarPesquisa.emit(direcao);
  }

}
