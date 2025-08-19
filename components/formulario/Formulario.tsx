"use client";
import styles from "../../style/Formulario.module.css";

export const Formulario = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Formulario de Contacto</h1>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje"
              rows={4}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}