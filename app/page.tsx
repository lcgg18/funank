import Image from "next/image";
import styles from "./page.module.css";
import { Lema } from "@/components";

export default function Home() {
  return (

    <main className="main" >
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
   

      <div className="textcon">

        Bienvenidos a FUNANK 
        
        <br /><br />

        En FUNANK trabajamos con la misión de proteger, acompañar y transformar la vida de niños, niñas y adolescentes en situación de vulnerabilidad en Colombia. Prestamos servicios especializados de apoyo psicosocial y modalidad de internado, en cumplimiento con los lineamientos y bajo la supervisión del Instituto Colombiano de Bienestar Familiar (ICBF).

        <br /><br /> Nuestra labor se fundamenta en la convicción de que cada niño y adolescente merece crecer en un entorno seguro, afectuoso y lleno de oportunidades. Contamos con un equipo interdisciplinario conformado por psicólogos, trabajadores sociales, pedagogos y cuidadores que, con profesionalismo y calidez humana, brindan atención integral respetando siempre los derechos y la dignidad de cada persona.

       <br /><br /> En el área de apoyo psicosocial, fortalecemos el bienestar emocional, las habilidades sociales y la capacidad de los beneficiarios para construir un proyecto de vida sólido. En nuestra modalidad de internado, ofrecemos un hogar protector donde se fomenta la educación, la recreación, la sana convivencia y la formación en valores.

       <br /><br />  Más allá de atender necesidades inmediatas, en FUNANK nos enfocamos en generar cambios duraderos, trabajando en conjunto con familias, comunidades e instituciones aliadas para construir oportunidades reales de inclusión y desarrollo.

       <br /><br /> En FUNANK creemos que cada historia puede transformarse y que cada niño merece soñar y alcanzar un futuro mejor. Acompáñanos en esta misión de esperanza y compromiso.

      </div>


    </main>

  );
}
