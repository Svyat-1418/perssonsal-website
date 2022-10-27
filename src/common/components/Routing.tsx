import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout";
import {Home} from "../../components/Home/Home";
import {About} from "../../components/About/About";
import {Portfolio} from "../../components/Portfolio/Portfolio";
import {Contacts} from "../../components/Contacts/Contacts";
import { PageNotFound } from "../../components/PageNotFound/PageNotFound";

export const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>

        <Route index element={<Home />}/>
        <Route path={"home"} element={<Home/>}/>
        <Route path={"about"} element={<About />}/>
        <Route path={"portfolio"} element={<Portfolio />}/>
        <Route path={"contacts"} element={<Contacts />}/>

        <Route path={"404"} element={<PageNotFound />} />
        <Route path={"*"} element={<Navigate to={"404"} />} />

      </Route>
    </Routes>
  )
}

