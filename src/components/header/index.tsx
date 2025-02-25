import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <section className={styles.conteudo}>
        <nav className={styles.nav}>
          <Link href={"/"}>
            <h1 className={styles.logo}>
              Tarefas<span>+</span>
            </h1>
          </Link>
          <Link href="/dashboard" className={styles.link}>
            Meu Painel
          </Link>
        </nav>
        <button className={styles.botaoLogin}>Acessar</button>
      </section>
    </header>
  );
}
