import styles from "./Navbar.module.scss"
import {CustomLink} from "../../../common/components/CustomLink/CustomLink";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><CustomLink to={"home"}>Home</CustomLink></li>
        <li><CustomLink to={"about"}>About</CustomLink></li>
        <li><CustomLink to={"contacts"}>Contacts</CustomLink></li>
        <li><CustomLink to={"portfolio"}>Portfolio</CustomLink></li>
        <li><CustomLink to={"contacts"}>Contacts</CustomLink></li>
      </ul>
    </nav>
  )
}