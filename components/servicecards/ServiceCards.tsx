"use client";
import styles from "../../style/ModernCards.module.css";
import { motion } from 'framer-motion';

const ITEMS = [
    {
        titulo: "Servicio de Internado",
        descripcion: "Modalidad de restablecimiento de derechos que pertenece al grupo de modalidades de acogimiento residencial, que presta sus servicios 24 horas los 7 días de la semana, desarrollando acciones de acompañamiento psicosocial a la niña, niño o adolescente y a su familia, en articulación con las autoridades administrativas.",
    },
    {
        titulo: "Servicio de Apoyo Psicosocial",
        descripcion: " Se desarrolla proceso psicosocial de apoyo y fortalecimiento a la familia durante diez (10) intervenciones al mes con cada niño, niña o adolescente y su familia o red vincular de apoyo. "}
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

export const ServiceCards = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Servicios que Prestamos como Operador del ICBF</h1>
                <section className={styles.grid}>
                    {ITEMS.map((item, i) => (
                        <Card key={i} title={item.titulo} content={item.descripcion} />
                    ))}
                </section>
            </div>
        </main>
    );
}