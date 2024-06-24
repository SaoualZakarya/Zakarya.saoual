import { BrowserRouter ,Routes,Route } from "react-router-dom"
import {MainLayout} from './component/MainLayout'
import {AboutMe} from './pages/AboutMe'
import {Resume} from './pages/Resume'
import {Portfolio} from './pages/Portfolio'
import {Blog} from './pages/Blog'
import {Contact} from './pages/Contact'
import {NotFound} from './pages/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path={'/'} element={<MainLayout/>} >
            <Route index element={<AboutMe/>} />
            <Route path='resume' element={<Resume/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
