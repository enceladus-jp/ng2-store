import { Injectable } from '@angular/core' ;

import { Reducer, Action } from '@ngrx/store';

// Initial state value (default value) of the store
const initialState : any = {
    // previous state array; useful for reverting back with undo
    past : [],
    // current state string; textarea element mainly deals with this
    present : "" ,
    // future state array; useful for redo button
    future : []
}

// --------------------------------------------------------------------
// Our reducer. A reducer is a pure function that returns accumulated 
// value which can represent the state of a particular component of the
// application, in this case: TextareaComponent. Combination of these
// can represent the entire application's state.
// --------------------------------------------------------------------
export const editorReducer : Reducer<any> = 
    (state : any = initialState, action : Action) => {
        // all past, present, and future assigned with state elements with 
        //  similar name (destructured assignment)
        const { past, present, future } = state
        switch(action.type) {
            // Gets called when any keydown event occurs in text area
            case "MORPH" :
            const newPresent = present + action.payload ;
                if (present === newPresent) {
                    return state
                }
                return {
                    past: [ ...past, present ],
                    present: newPresent,
                    future: []
                }
            case "UNDO" :
                const previous = past[past.length - 1]
                const newPast = past.slice(0, past.length - 1)
                return {
                    past: newPast,
                    present: previous,
                    future: [ present, ...future ]
                }
            case "REDO" :
                const next = future[0]
                const newFuture = future.slice(1)
                return {
                    past: [ ...past, present ],
                    present: next,
                    future: newFuture
                }
            // provided for completion's sake 
            default :
                return {past : past, present : present, future : future} ;
        }
    }

@Injectable()
export class EditorService {
    
} 