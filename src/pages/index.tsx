import Head from "next/head";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import imagemTarefas from "../../public/assets/tarefas-imagem.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+</title>
      </Head>

      <main className={styles.principal}>
        <div className={styles.conteudoLogo}>
          <Image
            className={styles.imagem}
            alt="Logo Tarefas"
            src={imagemTarefas}
            priority
          />
        </div>
        <h1 className={styles.titulo}>
          Sistema para organização de suas tarefas!
        </h1>

        <div className={styles.conteudoInformacoes}>
          <section className={styles.caixa}>
            <span>Posts</span>
          </section>
          <section className={styles.caixa}>
            <span>Comentários</span>
          </section>
        </div>
      </main>
    </div>
  );
}
