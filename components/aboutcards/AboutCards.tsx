"use client";
import styles from "../../style/AboutCards.module.css";
import { motion } from 'framer-motion';

const ITEMS = [
    {
        titulo: "Misión",
        descripcion: "Somos una entidad sin ánimo de lucro que mediante procesos de transformación social basados en la calidad, la participación y la responsabilidad, aportamos a la construcción de mejores ciudadanos.  Procesos de transformación de valores y competencias ciudadanas con niños y niñas, capacitaciones en liderazgo con jóvenes y refuerzo de la formación en valores para los adultos.",
    },
    {
        titulo: "Visión",
        descripcion: "Ser una Fundación líder en procesos de alto impacto, actuando como dinamizadora en la construcción y desarrollo de la sociedad colombiana.",
    },
    {
        titulo: "Valores",
        descripcion: "Calidad, Participacion y Respponsabilidad. "
,
    },
];

function Card({ title, content }: { title: string; content: string }) {
    return (
        <>
            <motion.article
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className={styles.cardWrapper}
            >
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardText}>{content}</p>
                </div>
            </motion.article>
        </>
    );
}

export const AboutCards = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Enfoque de Nuestra Fundación</h1>
                <section className={styles.grid}>
                    {ITEMS.map((item, i) => (
                        <Card key={i} title={item.titulo} content={item.descripcion} />
                    ))}
                </section>
            </div>
        </main>
    );
}