import type{ PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"



export interface AuthorSliceState {
    idAuthor: number[]
    name: string
    listAuthor: string[]
    nameBook: string 
    arrayBook: string[]
    yearBook: number
    arrayYear: number[]    
}

const initialState: AuthorSliceState = {
    idAuthor: [],
    name: "",
    listAuthor: [],
    nameBook: "",
    arrayBook: [],
    yearBook: 0,
    arrayYear: [],
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
        addInListBook: create.reducer( (state, action: PayloadAction<String>) => {
                state.arrayBook = [...state.arrayBook, state.nameBook + action.payload]
        }),
        addInListYear: create.reducer( (state, action: PayloadAction<number>) => {
            state.arrayYear = [...state.arrayYear, state.yearBook + action.payload]
    }),
        
    }),
        
    selectors: {
        selectListAuthor: author => author.listAuthor,
        selectIdAuthor: id => id.idAuthor,
        selectListBook: book => book.arrayBook,
        selectListYear: year => year.arrayYear,
    },
})

export const { addInListAuthor,addIdAuthor,addInListBook,addInListYear } = authorSlice.actions

export const {selectListAuthor,selectIdAuthor, selectListBook, selectListYear} = authorSlice.selectors