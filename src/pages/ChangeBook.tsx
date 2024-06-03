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
  const [selectedSecondAuthor, setSecondSelectedAuthor] = useState('')
  const[extraAuthor, setExtraAuthor] = useState(false)

  const combinedList = bookList.map((book, index) => ({
    book: book,
    year: yearList[index],
    author: [authorListBook[index]], // Each element in authorListBook is now an array
  }));

  const handleAddBook = () => {
    dispatch(addInListBook(book));
    dispatch(addInListYear(parseInt(year)))

    // Create an array of authors
    const authors = [selectedAuthor];
    if (selectedSecondAuthor && selectedSecondAuthor !== selectedAuthor) {
      authors.push(selectedSecondAuthor);
    }

    // Dispatch the action with the array
    dispatch(addInListBookAuthor(authors));

    setYear('')
    setBook('')
    setSelectedAuthor('');
    setExtraAuthor(false)
    console.log(combinedList)
  }

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
          <option value="" selected disabled hidden>Выберите автора(ов)</option>
          {authorList.map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>
        {extraAuthor?<select
          className='w-[300px] border-indigo-900 border-5'
          aria-label="Select Author"
          onChange={(e) => setSecondSelectedAuthor(e.target.value)}
          value={selectedSecondAuthor}
        >
          <option value="" selected disabled hidden>Выберите автора(ов)</option>
          {authorList.filter((author)=> author !== selectedAuthor).map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>: null}
        <Button 
          className=""
          aria-label="Add Select"
          onClick={()=>setExtraAuthor(true)
          }
        >+</Button>
        <Button 
          className=""
          aria-label="Add Author"
          onClick={handleAddBook
          }
          disabled={book === '' && year === ''}
        >Добавить книгу</Button>
      </div>
      <div className='flex justify-center mt-6 gap-10'>
        <div className=' text-3xl  flex-col'>
          <h1>Book:</h1>
          {combinedList.map((item, index) => <div key={index}>{item.book}</div>)}
        </div>
        <div className=' text-3xl text-red-600 '>
          <h1 className='text-black'>Year:</h1>
          {combinedList.map((item, index) => <div key={index}>{item.year}</div>)}
        </div>
        <div className=' text-3xl text-green-600 '>
          <h1 className='text-black'>Author:</h1>
          {combinedList.map((item, index) => (
            <div key={index}>
              {item.author.map((author, authorIndex) => ( // Iterate through the authors array
                <div key={authorIndex}>{author} </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}