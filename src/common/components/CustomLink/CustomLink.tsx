import styles from "./CustomLink.module.scss"
import {Link, useMatch} from "react-router-dom";
import {FC, ReactNode} from "react";

type Props = {
  children?: ReactNode
  to: string
}

export const CustomLink: FC<Props> = ({children, to, ...restProps}) => {
  const match = useMatch(to)

  return (
    <>
     <Link
       to={to}
       className={match ? styles.activeLink : styles.link}

       {...restProps}
     >
       {children}
     </Link>
    </>
  )
}