import React from "react";
import styles from "./mystyle.module.css";

interface Props {
  name: string;
  buttonType: string;
}

export const Button: React.FC<Props> = ({ name, buttonType }) => {
  return(
    <div className={styles.nextToButton}>
      <button className={buttonType === 'edit' ? styles.editButton : styles.deleteButton}>
        {name}
      </button>
    </div>
  );
};
