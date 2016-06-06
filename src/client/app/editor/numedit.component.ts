import {Component, Input} from '@angular/core' ;

import {NumberExtractPipe} from './number.pipe'

@Component({
    selector : 'numedit',
    template : `<div><p>{{editor.present | numberExtract}}</p></div>`,
    pipes : [NumberExtractPipe]
})

export class NumEditComponent {
    @Input() editor : any ; 
}