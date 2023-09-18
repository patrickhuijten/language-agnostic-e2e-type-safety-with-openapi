import { Hike } from "@trackmyhikes/client";
import styles from "./card.module.css";
import Image from "next/image";

const getShortDistanceUnit = (unit: Hike["unit"]) => {
  switch (unit) {
    case "Kilometer":
      return "KM";
    case "Mile":
      return "MI";
  }
};

export const Card = ({ hike }: { hike: Hike }) => {
  return (
    <div className={styles.card}>
      <Image src={hike.thumbnail} alt={hike.name} width={400} height={300} />
      <footer className={styles.metadata}>
        <div></div>
        <div className={styles.attributes}>
          <span>{hike.name}</span>
          <span>
            {hike.length} {getShortDistanceUnit(hike.unit)}
          </span>
        </div>
      </footer>
    </div>
  );
};
