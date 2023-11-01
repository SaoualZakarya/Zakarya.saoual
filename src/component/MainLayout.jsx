import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"

export const MainLayout = () => {
  return (
    <>
      <main className="main-layout bg-white dark:bg-[#222222]">
        <NavBar/>
        <div className="min-h-[70vb]">
          <Outlet/>
        </div>
        <Footer/>
      </main>
    </>
  )
}
