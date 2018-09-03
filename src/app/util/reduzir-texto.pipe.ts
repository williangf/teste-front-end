import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reduzirTexto'
})
export class ReduzirTexto implements PipeTransform {

    transform(texto: string, tamanhoMaximo: number): string {
        if (texto.length > tamanhoMaximo) {
            return texto.substring(0, tamanhoMaximo) + '...';
        } else {
            return texto;
        }
    }

}