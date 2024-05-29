import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addInListAuthor, addInListBook, addInListBookAuthor, addInListYear, selectListAuthor, selectListBook, selectListBookAuthor, selectListYear } from '../features/counter/authorSlice'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { Navbar } from '../Component/Navbar'


export const ChangeBook = () => {

  const dispatch = useAppDispatch()
  const bookList = useAppSelector(selectListBook)
  const yearList = useAppSelector(selectListYear)
  const authorList  = useAppSelector(selectListAuthor)
  const authorListBook = useAppSelector(selectListBookAuthor)
  const [book, setBook] = useState('')
  const [year, setYear] = useState('')
  const [selectedAuthor, setSelectedAuthor] = useState('');
  
  return (
   
    <div  className=" justify-center ">
      <Navbar />
      <h1 className='text-3xl flex justify-center mt-4'>Добавить книгу</h1>
      <div  className='flex justify-center mt-14 gap-4'>
      <Input
       placeholder='Название книги'
       className='w-[300px]'
        aria-label="Set book"
        value={book}
        type='text'
        onChange={e => {
          setBook(e.target.value)
         
         
        }}
      />
    <Input
    placeholder='Год книги'
    className='w-[300px]'
     aria-label="Set year"
     value={year}
     type='number'
     onChange={e => {
      setYear(e.target.value)
      
      
     }}
     />
     <select
          className='w-[300px] border-indigo-900 border-5'
          aria-label="Select Author"
          onChange={(e) => setSelectedAuthor(e.target.value)}
          value={selectedAuthor}
          
        >
          {authorList.map((author, index) => (
            < option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>
    <Button 
     className=""
     aria-label="Add Author"
     onClick={() => {
      dispatch(addInListBook(book));
      dispatch(addInListYear(parseInt(year)))
      dispatch(addInListBookAuthor(selectedAuthor));
      setYear('')
      setBook('')
      setSelectedAuthor('');
    }}
    disabled={book === '' && year === ''}

    >Добавить книгу</Button>
    </div>
    <div className='flex justify-center mt-6 gap-10'>
        <div className=' text-3xl  flex-col'>
          <h1>Book:</h1>
          {bookList.map((el, index) => <div key={index}>{el}</div>)}
        </div>
        <div className=' text-3xl text-red-600 '>
          <h1 className='text-black'>Year:</h1>
          {yearList.map((el, index) => <div key={index}>{el}</div>)}
        </div>
        <div className=' text-3xl text-green-600 '>
        <h1 className='text-black'>Author:</h1>
         <div> {authorListBook.map((el, index) => <div key={index}>{el}</div>)}</div> 
        </div>
      </div>


 </div>
  )
}
