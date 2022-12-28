import Link from "next/link"
import style from "./../styles/footer.module.css"

export default function Footer() {
  return (
    <div className={style.footer}>
    &copy; 2022 Sebastian Felsberg | <Link href="impressum">Impressum</Link></div>
  )
}
