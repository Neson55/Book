import type{ PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { AnyComponent } from "styled-components/dist/types"



export interface AuthorSliceState {
    idAuthor: number[]
    name: string
    listAuthor: string[]
    nameBook: string 
    arrayBook: string[]
    yearBook: number
    arrayYear: number[]
    listBookAuthor: string[]    
}

const initialState: AuthorSliceState = {
    idAuthor: [],
    name: "",
    listAuthor: [],
    nameBook: "",
    arrayBook: [],
    yearBook: 0,
    arrayYear: [],
    listBookAuthor: [],
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
        deleteAuthor: create.reducer( (state, action: PayloadAction<string>) => {
            state.listAuthor = state.listAuthor.filter(author => author !== action.payload) 
            


        }),
        deleteAuthorId: create.reducer( (state, action: PayloadAction<number>) => {
            state.idAuthor = state.idAuthor.filter(id=> id !== action.payload) 
            


        }),
        addIdAuthor: create.reducer(state => {
            state.idAuthor = [...state.idAuthor, new Date().getTime() ]
          }),
        addInListBook: create.reducer( (state, action: PayloadAction<String>) => {
                state.arrayBook = [...state.arrayBook, state.nameBook + action.payload]
        }),
        addInListYear: create.reducer( (state, action: PayloadAction<number>) => {
            state.arrayYear = [...state.arrayYear, state.yearBook + action.payload]
    }),
         addInListBookAuthor: create.reducer( (state, action: PayloadAction<string>) => {
            state.listBookAuthor = [...state.listBookAuthor, state.listAuthor.filter(author => author.includes(action.payload))]
            


}),
        
    }),
        
    selectors: {
        selectListAuthor: author => author.listAuthor,
        selectIdAuthor: id => id.idAuthor,
        selectListBook: book => book.arrayBook,
        selectListYear: year => year.arrayYear,
        selectListBookAuthor: bookAuthor => bookAuthor.listBookAuthor
    },
})

export const { addInListAuthor,addIdAuthor,addInListBook,addInListYear, addInListBookAuthor, deleteAuthor, deleteAuthorId } = authorSlice.actions

export const {selectListAuthor,selectIdAuthor, selectListBook, selectListYear, selectListBookAuthor} = authorSlice.selectors