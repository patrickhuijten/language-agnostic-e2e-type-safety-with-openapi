import { Hike } from "@trackmyhikes/client";
import styles from "./card.module.css";
import Image from "next/image";
import { Fragment } from "react";

const getShortDistanceUnit = (unit: Hike["unit"]) => {
  switch (unit) {
    case "Kilometer":
      return "KM";
    case "Mile":
      return "MI";
  }
};

export const Card = ({
  hike,
  onClick,
}: {
  hike: Hike;
  onClick: () => void;
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
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
