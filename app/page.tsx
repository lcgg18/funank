import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

      <main >
          <Image
          src="/1.png"
          alt="Funank logo"
          width={250}
          height={250}
          priority
        />
        <h1>
          Pagina en Construcción.
        </h1>
        
      </main>

  );
}
