import Image from "next/image";
import styles from "./page.module.css";
import { Lema } from "@/components";

export default function Home() {
  return (

    <main >
      <Lema />
      <h1>
        Pagina Principal
      </h1>
      <div className="imagen">
        <Image
          src="/image1.jpeg"
          alt="Funank logo"
          width={400}
          height={300}
          priority
        />
      </div>
    </main>

  );
}
