import './App.css'

//React imports
import { Routes, Route } from 'react-router-dom'

//aws imports
import { withAuthenticator } from '@aws-amplify/ui-react'
import { DataStore } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'

//Compenent Pages
import Home from './pages/Home'
import Search from './pages/Search'
import About from './pages/About'
import Cmaedit from './pages/Cmaedit'
import Nomatch from './pages/Nomatch'
import Navbar from './components/Navbar'

//Roboto font imports
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


function App({user, signOut}) {
  DataStore.start()
  return (
    <>
      <Navbar signOut={signOut}/>
      <Routes>
        <Route path="/" element={<Home  user={user} />} />
        <Route path="/search" element={<Search user={user} />} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="/cmaedit/:sk" element={<Cmaedit user={user} />} />
        <Route path="*" element={<Nomatch user={user} />} />  {/*TODO: Implement*/}
      </Routes>
    </>
  )
}

export default withAuthenticator(App)