import { NavbarContent, NavbarItem, Navbar as NavbarUi } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <NavbarUi>
      <NavbarContent className="hidden sm:flex gap-1">
        <NavbarItem className='bg-slate-300 p-3 text-xl hover:bg-slate-500 rounded-lg'>
          <Link to={'/'}>
            Список книг
          </Link>
        </NavbarItem>
        <NavbarItem className='bg-slate-300 p-3 text-xl hover:bg-slate-500 rounded-lg'  >
          <Link  to={'/changebook'}>
            Добавить книгу
          </Link>
        </NavbarItem>
        <NavbarItem className='bg-slate-300 p-3 text-xl hover:bg-slate-500 rounded-lg'>
          <Link color="foreground" to={'/authors'}>
            Список Авторов
          </Link>
        </NavbarItem>
        <NavbarItem  className='bg-slate-300 p-3 text-xl hover:bg-slate-500 rounded-lg'>
          <Link to={'/changeauthors'}>Добавить автора</Link>
        </NavbarItem>
      </NavbarContent>
    </NavbarUi>
    </div>
  )
}
