import styles from "./page.module.css";
import { Card } from "./card";

export default async function Home() {
  const hikes = await getHikes();
  console.log(hikes);
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
  // const data = await fetch("http://localhost:8080/hikes");
  const data = await fetch("https://picsum.photos/v2/list");
  console.table(data);
  return await data.json();
};
