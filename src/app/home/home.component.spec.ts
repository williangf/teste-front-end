import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { HomeComponent } from './home.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ReduzirTexto } from '../util/reduzir-texto.pipe';
import { PaginacaoComponent } from './resultado/paginacao/paginacao.component';
import { CarroselComponent } from './resultado/carrosel/carrosel.component';
import { PesquisaService } from '../pesquisa.service';
import { SemResultadoComponent } from './sem-resultado/sem-resultado.component';

describe('CarroselComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ResultadoComponent, ReduzirTexto, PaginacaoComponent, CarroselComponent, SemResultadoComponent],
      providers: [PesquisaService, { provide: Http, deps: [MockBackend] }],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
