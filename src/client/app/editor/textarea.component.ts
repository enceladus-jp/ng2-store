import { Component, Input, Output, EventEmitter } from '@angular/core' ;

@Component({
    selector : 'editor-textarea',
    template : `
    <textarea placeholder="Type here..." 
        (keypress)="editorText.emit($event)"
        [value]="editor.present" autofocus></textarea>
    `
})

export class TextareaComponent {
    @Input() editor : any ; 
    @Output() editorText = new EventEmitter() ; 
}