import { Component } from '@angular/core' ;
import { HTTP_PROVIDERS } from '@angular/http' ;

import { EditorComponent } from './editor/editor.component' ;

@Component({
    selector: 'my-app',
    template: `<h1>Hello World!</h1>
    <editor></editor>`,
    providers : [HTTP_PROVIDERS],
    directives : [EditorComponent]
})

export class AppComponent {
    
}