import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from '@reduxjs/toolkit'

export interface AuthorSliceState {
  idAuthor: number[]
  listAuthor: string[]
  nameBook: string 
  arrayBook: string[]
  yearBook: number
  arrayYear: number[]
  listBookAuthor: string[]    
}

const initialState: AuthorSliceState = {
  idAuthor: [],
  listAuthor: [],
  nameBook: "",
  arrayBook: [],
  yearBook: 0,
  arrayYear: [],
  listBookAuthor: [],
}

export const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    addInListAuthor: (state, action: PayloadAction<string>) => {
      state.listAuthor = [...state.listAuthor, action.payload];  // Directly add the payload
    },
    deleteAuthor: (state, action: PayloadAction<string>) => {
      state.listAuthor = state.listAuthor.filter(author => author !== action.payload) 
    },
    deleteAuthorId: (state, action: PayloadAction<number>) => {
      state.idAuthor = state.idAuthor.filter(id=> id !== action.payload) 
    },
    addIdAuthor: (state) => {
      state.idAuthor = [...state.idAuthor, new Date().getTime() ]
    },
    addInListBook: (state, action: PayloadAction<string>) => {
      state.arrayBook = [...state.arrayBook, action.payload];
    },
    addInListYear: (state, action: PayloadAction<number>) => {
      state.arrayYear = [...state.arrayYear, action.payload];
    },
    addInListBookAuthor: (state, action: PayloadAction<string[]>) => {
        state.listBookAuthor = [...state.listBookAuthor, action.payload] 
      },
  },
  selectors: {
    selectListAuthor: (state) => state.listAuthor,
    selectIdAuthor: (state) => state.idAuthor,
    selectListBook: (state) => state.arrayBook,
    selectListYear: (state) => state.arrayYear,
    selectListBookAuthor: (state) => state.listBookAuthor
  },
})

export const { 
  addInListAuthor,
  addIdAuthor,
  addInListBook,
  addInListYear, 
  addInListBookAuthor, 
  deleteAuthor, 
  deleteAuthorId,
} = authorSlice.actions

export const {
  selectListAuthor,
  selectIdAuthor,
  selectListBook,
  selectListYear,
  selectListBookAuthor
} = authorSlice.selectors

