import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';

import { PesquisaService } from './pesquisa.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultadoComponent } from './home/resultado/resultado.component';
import { DetalheComponent } from './home/detalhe/detalhe.component';
import { SemResultadoComponent } from './home/sem-resultado/sem-resultado.component';
import { PaginacaoComponent } from './home/resultado/paginacao/paginacao.component';
import { CarroselComponent } from './home/resultado/carrosel/carrosel.component';

//Pipes
import { ReduzirTexto } from './util/reduzir-texto.pipe';
import { FormatarNumero } from './util/formatar-numero.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultadoComponent,
    SemResultadoComponent,
    DetalheComponent,
    CarroselComponent,
    PaginacaoComponent,
    ReduzirTexto,
    FormatarNumero
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PesquisaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
