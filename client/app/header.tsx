import styles from "./header.module.css";
import Image from "next/image";
export const Header = () => {
  const profileParams = [
    "name=Patrick+Huijten",
    "font-size=0.3",
    "background=d1ccc0",
  ];

  return (
    <header className={styles.header}>
      <button className={styles["nav-button"]}> ||| </button>
      <span className={styles.title}>🥾 trackmyhikes.io </span>
      <button className={styles.profile}>
        <Image
          width={40}
          height={40}
          alt="Initials of logged in user"
          src={"https://ui-avatars.com/api/?" + profileParams.join("&")}
        />
      </button>
    </header>
  );
};
