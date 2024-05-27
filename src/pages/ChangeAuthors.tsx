import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addIdAuthor, addInListAuthor, selectIdAuthor, selectListAuthor } from '../features/counter/authorSlice'
import { Button, Input } from '@nextui-org/react'
import { Navbar } from '../Component/Navbar'


export const ChangeAuthors = () => {
  const dispatch = useAppDispatch()
  const list = useAppSelector(selectListAuthor)
  const idAuthor = useAppSelector(selectIdAuthor)
  const [author, setAuthor] = useState('')

  return (
    <div  className=" justify-center ">
      <Navbar />
      <div  className='flex justify-center mt-14 gap-4'>
    <Input
    placeholder='ФИО'
    className='w-[300px]'
     aria-label="Set Author"
     value={author}
     type='text'
     onChange={e => {
      setAuthor(e.target.value)
      
      
     }}
     />
    <Button 
     className=""
     aria-label="Add Author"
     onClick={() => {
      dispatch(addInListAuthor(author));
      dispatch(addIdAuthor());
      setAuthor('');
    }}
    disabled={author === ''}

    >Add Author</Button>
    </div>
    <div className='flex justify-center mt-6 gap-10'>
        <div className=' text-3xl  flex-col'>
          <h1>Author:</h1>
          {list.map((el, index) => <div key={index}>{el}</div>)}
        </div>
        <div className=' text-3xl text-red-600 '>
          <h1 className='text-black'>Id:</h1>
          {idAuthor.map((el, index) => <div key={index}>{el}</div>)}
        </div>
        <div className=' text-3xl text-red-600 '>
          <h1 className='text-black'>Author & Id:</h1>
          {list.map((author, index) => (
            <div key={index}>
              {`"${author}", ${idAuthor[index]}`} 
            </div>
          ))}
        </div>
      </div>


 </div>
  )
}




