import {Pipe, PipeTransform} from '@angular/core' ;

@Pipe({
    name:"numberExtract",
    pure : false
})
export class NumberExtractPipe implements PipeTransform {
    transform(text : String){
        return (text.match(/\d+/)) ;
    }
}