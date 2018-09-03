import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ResultadoComponent } from './resultado.component';
import { ReduzirTexto } from '../../util/reduzir-texto.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { SemResultadoComponent } from '../sem-resultado/sem-resultado.component';
import { PesquisaService } from '../../pesquisa.service';
import { CarroselComponent } from './carrosel/carrosel.component';

describe('ResultadoComponent', () => {
  let component: ResultadoComponent;
  let fixture: ComponentFixture<ResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoComponent, ReduzirTexto, PaginacaoComponent, SemResultadoComponent, CarroselComponent, SemResultadoComponent ],
      providers: [PesquisaService, { provide: Http, deps: [MockBackend] }],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
