import React from "react";
import styles from "./GitApiCard.module.css";

const GitApiCard = (item) => {
  console.log(item);

  return (
    <>
      <div className={styles.wrapper}>
        <img src={item.item.avatar_url} alt="" />
        <h4>Login : {item.item.login}</h4>
        <a href={item.item.html_url}> URL</a>
        <p>Type : {item.item.type}</p>
      </div>
    </>
  );
};
export default GitApiCard;
