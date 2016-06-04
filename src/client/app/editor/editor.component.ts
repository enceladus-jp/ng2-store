import { Component, Input } from '@angular/core' ;
import { Store } from '@ngrx/store' ;

import { EditorService } from './editor.service' ;
import { TextareaComponent } from './textarea.component' ;

@Component({
    selector : 'editor',
    template : `
    <div>
        <button (click)="undoType(editor)">Undo</button>
        <button (click)="redoType(editor)">Redo</button>
    </div>
    <div>
        <editor-textarea [editor]="editor | async"
            (editorText)="handleEditorText($event)"></editor-textarea>
    </div>
    `,
    directives : [TextareaComponent]
})

export class EditorComponent {
    public editor : any ;
    
    constructor(private _store : Store<any>){
        this.editor = this._store.select('editor') ;
        console.log("Initial state of editor store:" ) ;
        console.log(this.editor) ;
    }
    
    handleEditorText(keyev : any) {
        // console.log("Current value of textarea.component " + text.present) ;
        if (keyev.key.length === 1) {
            this._store.dispatch({type: "MORPH", payload : keyev.key}) ;
            console.log("Value of store after updating with MORPH:") ;
            console.log(this._store);
        }
    }
    
    undoType(text : any){
        this._store.dispatch({type: "UNDO", payload : text}) ;
    }
    
    redoType(text : any){
        this._store.dispatch({type: "REDO", payload : text}) ;
    }
}