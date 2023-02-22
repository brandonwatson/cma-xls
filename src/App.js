import './App.css'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import About from './pages/About'
import Nomatch from './pages/Nomatch'
import Navbar from './components/Navbar'

//roboto font
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

//amplify UI auth UX
import '@aws-amplify/ui-react/styles.css'


function App({user, signOut}) {
  return (
    <>
      <Navbar signOut={signOut}/>
      <Routes>
        <Route path="/" element={<Home  user={user} />} />
        <Route path="/search" element={<Search user={user} />} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="*" element={<Nomatch user={user} />} />  {/*TODO: Implement*/}
      </Routes>
    </>
  )
}

export default withAuthenticator(App)