import { Component } from '@angular/core' ;
import { HTTP_PROVIDERS } from '@angular/http' ;

import { EditorComponent } from './editor/editor.component' ;
import { NumFilterComponent } from './numfilter/numfilter.component' ;

@Component({
    selector: 'my-app',
    template: `<h1>Hello World!</h1>
    <editor></editor>
    <num-filter></num-filter>`,
    providers : [HTTP_PROVIDERS],
    directives : [ EditorComponent, NumFilterComponent ]
})

export class AppComponent {
    
}