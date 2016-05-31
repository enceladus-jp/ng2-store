import { bootstrap } from '@angular/platform-browser-dynamic' ;
import { AppComponent } from './app.component' ;

import { editorReducer } from './editor/editor.service' ;
import { provideStore } from '@ngrx/store' ; 

bootstrap(AppComponent, [
    provideStore({ editor: editorReducer })
]) ;