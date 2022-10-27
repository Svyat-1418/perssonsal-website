import {Header} from "../../components/Header/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../../components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header/>

      <main>
        {/* added main when need to wrap using class 'container' */}
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

