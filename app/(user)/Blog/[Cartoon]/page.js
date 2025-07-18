import atas from "@/lib/one.json"
import styles from "./Cartoon.module.css"

const Cartoon = ({ params }) => {
  const data = atas;
  const item = data[params.Cartoon - 1];

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer} style ={{marginRight: "80px"}}>
        <img src={item.src} className={styles.image} alt={item.title} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{item.des}</h1>
      </div>
    </div>
  );
};

export default Cartoon;
