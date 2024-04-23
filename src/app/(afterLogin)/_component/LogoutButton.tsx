"use client";

import styles from "./logoutButton.module.css";

const LogoutButton = () => {
  const me = { id: "codesver", nickname: "codes", image: "/5Udwvqim.jpg" };

  const onLogout = () => {};

  return (
    <button className={styles.logOutButton} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={styles.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
};

export default LogoutButton;
