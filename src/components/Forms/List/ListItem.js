import styles from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={styles["basic-form"]}>
      <img
        className={styles.img}
        src="https://thumbs.dreamstime.com/z/red-internet-computer-laptop-7331093.jpg"
        alt=""
      />
      <div className={styles.info}>
        <div className={styles.credintials}>
          <h1>Name LastName</h1>
          <h1>LaptopName</h1>
        </div>
        <a href="">მეტის ნახვა...</a>
      </div>
    </div>
  );
};

export default ListItem;
