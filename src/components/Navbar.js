import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import './Navbar.css'


function Navbar({signOut}) {
return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/search'>Search</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </nav>
        <Button
            variant='contained'
            color='secondary'
            size='meidum'
            onClick={signOut}>Sign out
        </Button>
    </div>
    )
}

export default Navbar