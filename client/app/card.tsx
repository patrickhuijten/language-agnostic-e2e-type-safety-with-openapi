"use client";

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

export const Card = ({ hike }: { hike: Hike }) => {
  return (
    <div className={styles.card} onClick={() => onClickHandler(hike.id)}>
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

const onClickHandler = async (hikeId: number) => {
  // const hike = await getHike(hikeId);
  const hike = { id: hikeId };
  alert(JSON.stringify(hike, null, 2));
};

// const getHike = async (hikeId: number) => {
//   const api = new HikeApi();
//   try {
//     const { hike } = await api.getHike({ hikeId });
//     return hike;
//   } catch (err) {
//     const hike: Hike = {
//       id: 1,
//       name: "Test Hike",
//       length: 10,
//       unit: "Kilometer",
//       thumbnail: "https://via.placeholder.com/400x300.png?text=Test+Hike",
//     };
//     return hike;
//   }
// };
