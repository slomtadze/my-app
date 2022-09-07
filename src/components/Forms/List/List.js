import ListItem from "./ListItem";

import styles from "./List.module.css";

const List = () => {
  return (
    <div className={styles["basic-form"]}>
      <div className={styles["main-box"]}>
        <ListItem />
      </div>
    </div>
  );
};

export default List;
