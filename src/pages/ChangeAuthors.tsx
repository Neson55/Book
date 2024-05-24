import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addInListAuthor, selectIdAuthor, selectListAuthor } from '../features/counter/authorSlice'

export const ChangeAuthors = () => {
  const dispatch = useAppDispatch()
  const list = useAppSelector(selectListAuthor)
  const idAuthor = useAppSelector(selectIdAuthor)
  const [author, setAuthor] = useState('')
  const [id, setId] = useState('')

  return (
    <div  className="flex justify-center  ">
      <div >
    <input
    className=' border p-4'
     aria-label="Set increment amount"
     value={author}
     type='text'
     onChange={e => {
      setAuthor(e.target.value)
      
      
     }}
     />
    <button 
     className=" border p-4"
     aria-label="Add Author"
     onClick={() => {
      dispatch(addInListAuthor(author));
      setAuthor('');
    }}

    >Add Author</button>

    <div className=' text-3xl '>   {list.map((el, index) => <div key={index}>{el}</div>)}
    </div>
</div>

 </div>
  )
}
