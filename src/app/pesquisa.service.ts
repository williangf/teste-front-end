import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Resultado } from './home/resultado.model';
import { Observable } from 'rxjs';

import { map, retry } from 'rxjs/operators';

@Injectable()
export class PesquisaService {

    public resultados: string[] = [];

    public ultimoTermo: string;
    public prevToken: string;
    public nextToken: string;
    public ultimoToken: string;

    constructor(private http: Http) { }

    public getResultados(termo: string): Observable<Resultado[]> {

        return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${termo}&key=AIzaSyA3DwSyf_J27e-_GBjInyJXrV0p9FGELOE`)
            .pipe(
                map((resposta: Response) => {
                    this.prevToken = resposta.json().prevPageToken;
                    this.nextToken = resposta.json().nextPageToken;
                    this.ultimoTermo = termo;
                    this.resultados = resposta.json().items;

                    return resposta.json()
                }, retry(5))
            );
    }

    public getResultadoPorId(id: string): Observable<any> {
        return this.http.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,statistics&key=AIzaSyA3DwSyf_J27e-_GBjInyJXrV0p9FGELOE`)
            .pipe(
                map((resposta: Response) => resposta.json(), retry(5))
            );
    }

    public paginacao(direcao: string): Observable<any> {

        let token: string;

        if (direcao === 'last') {
            token = this.ultimoToken;
        } else {
            token = direcao == 'prev' ? this.prevToken : this.nextToken;
        }

        this.ultimoToken = token;

        return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${this.ultimoTermo}&pageToken=${token}&key=AIzaSyA3DwSyf_J27e-_GBjInyJXrV0p9FGELOE`)
            .pipe(
                map((resposta: Response) => {
                    this.prevToken = resposta.json().prevPageToken;
                    this.nextToken = resposta.json().nextPageToken;
                    this.resultados = resposta.json().items;
                    return resposta.json()
                }, retry(5))
            );
    }



}