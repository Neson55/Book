import type{ PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"



export interface AuthorSliceState {
    idAuthor: number[]
    name: string
    listAuthor: string[]
    
}

const initialState: AuthorSliceState = {
    idAuthor: [],
    name: "",
    listAuthor: [],
}

export const authorSlice = createAppSlice({
    name: "author",
    initialState,
    reducers:  create => ({
        addInListAuthor: create.reducer(
            (state, action: PayloadAction<String>) => {
                state.listAuthor = [...state.listAuthor, state.name + action.payload]  
            },
        ),
        addIdAuthor: create.reducer(state => {
            state.idAuthor = [...state.idAuthor, new Date().getTime() ]
          }),
        
    }),
        
    selectors: {
        selectListAuthor: author => author.listAuthor,
        selectIdAuthor: id => id.idAuthor
    },
})

export const { addInListAuthor,addIdAuthor } = authorSlice.actions

export const {selectListAuthor,selectIdAuthor} = authorSlice.selectors