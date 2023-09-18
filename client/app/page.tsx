import styles from "./page.module.css";
import { Card } from "./card";
import { HikeApi } from "@trackmyhikes/client";

export const revalidate = 0;

export default async function Home() {
  const { hikes } = await getHikes();

  return (
    <main className={styles.main}>
      <section className={styles.title}>
        <h1>Hikes I have completed</h1>
      </section>
      <section className={styles.grid}>
        {hikes.map((hike) => (
          <Card key={hike.id} hike={hike} />
        ))}
      </section>
    </main>
  );
}

const getHikes = async () => {
  const api = new HikeApi();
  return await api.listHikes();
};
