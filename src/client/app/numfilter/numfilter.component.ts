import { Component } from '@angular/core' ;
import { Store } from '@ngrx/store' ;

import { NumEditComponent } from './numedit.component' ;

@Component({
    selector : 'num-filter',
    template : `<numedit [editor]="editor | async"></numedit>`,
    directives : [ NumEditComponent ]
})

export class NumFilterComponent {
    public editor : any ;
    
    constructor(private _store : Store<any>){
        this.editor = _store.select("editor") ;
    }
}