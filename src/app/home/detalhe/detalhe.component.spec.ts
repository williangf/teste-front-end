import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { DetalheComponent } from './detalhe.component';

import { FormatarNumero } from '../../util/formatar-numero.pipe';
import { PesquisaService } from '../../pesquisa.service';




describe('DetalheComponent', () => {
  let component: DetalheComponent;
  let fixture: ComponentFixture<DetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheComponent, FormatarNumero],
      providers: [PesquisaService, { provide: Http, deps: [MockBackend] }],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
