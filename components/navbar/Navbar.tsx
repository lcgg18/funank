import Image from "next/image"
import Link from "next/link"


export const Navbar = () => {
  return (
    <nav className="nav">
      <Link href={"/"}><Image
        src="/1.png"
        alt="Funank logo"
        width={120}
        height={100}
        priority
      /></Link>
      <Link href={"/"} className="Link">Inicio</Link>
      <Link href={"/servicios"} className="Link">Servicios</Link>
      <Link href={"/about"} className="Link">Quienes Somos</Link>
      <Link href={"/contact"} className="Link">Contactos</Link>

    </nav>
  )
}
