import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'formatarNumero'
})
export class FormatarNumero implements PipeTransform {

    transform(valor: string, args: any[]): string {

        return valor.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

    }

}