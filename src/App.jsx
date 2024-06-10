
import './App.css'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Navbar from './components/Navbar'
import * as Sentry from '@sentry/react'

const App=()=> {
 


  return (
    <>
    <main className='bg-black'>
   <Navbar/>
   <Hero/>
   <Highlights/>
  <Model/>
    </main>
    </>
  )
}

export default App;
//try sentry some day
