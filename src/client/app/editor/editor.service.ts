import { Injectable } from '@angular/core' ;

import { Reducer, Action } from '@ngrx/store';

const initialState : any = {
    past : [],
    present : [],
    future : []
}

export const editorReducer : Reducer<any> = 
    (state : any = initialState, action : Action) => {
        const { past, present, future } = state
        switch(action.type) {
            case "MORPH" :
            const newPresent = [...present, action]
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
            default :
                return state ;
        }
    }

@Injectable()
export class EditorService {
    
} 