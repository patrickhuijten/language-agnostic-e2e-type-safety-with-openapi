import styles from "./card.module.css";
import Image from "next/image";

export const Card = ({ hike }: any) => {
  return (
    <div className={styles.card}>
      <Image
        src={hike.download_url}
        alt="hike.author"
        width={400}
        height={200}
      />
    </div>
  );
};
