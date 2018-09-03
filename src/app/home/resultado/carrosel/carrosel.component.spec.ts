import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselComponent } from './carrosel.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReduzirTexto } from '../../../util/reduzir-texto.pipe';
import { PesquisaService } from '../../../pesquisa.service';

import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ResultadoComponent } from '../resultado.component';
import { HomeComponent } from '../../home.component';
import { PaginacaoComponent } from '../paginacao/paginacao.component';

describe('CarroselComponent', () => {

  let component: CarroselComponent;
  let fixture: ComponentFixture<CarroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarroselComponent, ReduzirTexto, ResultadoComponent, HomeComponent, PaginacaoComponent],
      providers: [PesquisaService, { provide: Http, deps: [MockBackend] }],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
