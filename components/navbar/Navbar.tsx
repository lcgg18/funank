"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Navbar con excelente UX: accesible, responsive, pegajoso (sticky),
// indicador de ruta activa, menú móvil con teclado, y dropdown.
// CSS está incluido con styled-jsx para que puedas copiar/pegar en un solo archivo.

export const Navbar= () => {
  const [open, setOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement | null>(null);
  const pathname = usePathname?.() || "";

  // Cerrar menú al navegar
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Cerrar al hacer click fuera
  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);

      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Cerrar con ESC
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);

      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/about", label: "Quienes Somos" },
    { href: "/contact", label: "Contacto" }

  ];

  return (


    <div>

      <nav className="navbar" aria-label="Principal">
        <div className="brand">
          <Link href="/" aria-label="Ir al inicio" className="brand-link">

            <Image
              src="/1.png"
              alt="Funank logo"
              width={600}
              height={200}
              priority
            />

          </Link>
        </div>

        <button
          className="hamburger"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul id="nav-menu" className={`menu ${open ? "open" : ""}`} role="menubar">
          {links.map(link => (
            <li key={link.href} role="none">
              <Link
                role="menuitem"
                tabIndex={0}
                href={link.href}
                className={`item ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )

}
