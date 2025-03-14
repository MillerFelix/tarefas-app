import { GetServerSideProps } from "next";
import styles from "./styles.module.css";
import Head from "next/head";
import { getSession } from "next-auth/react";
import { TextArea } from "@/components/textarea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>
      <main className={styles.principal}>
        <section className={styles.conteudo}>
          <div className={styles.conteudoForm}>
            <h1 className={styles.titulo}>Qual sua tarefa?</h1>
            <form>
              <TextArea placeholder="Digite qual sua tarefa..." />
              <div className={styles.areaCheckbox}>
                <input type="checkbox" className={styles.checkbox} />
                <label>Deixar tarefa pública?</label>
              </div>
              <button type="submit" className={styles.botao}>
                Registrar
              </button>
            </form>
          </div>
        </section>
        <section className={styles.containerTarefa}>
          <h1>Minhas tarefas</h1>
          <article className={styles.tarefa}>
            <div className={styles.tagContainer}>
              <label className={styles.tag}>PÚBLICO</label>
              <button className={styles.botaoCompartilhar}>
                <FiShare2 size={22} color="#2968c7" />
              </button>
            </div>
            <div className={styles.conteudoTarefa}>
              <p>Minha tarefa exemplo</p>
              <button className={styles.botaoLixeira}>
                <FaTrash size={24} color="#c50e33" />
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
