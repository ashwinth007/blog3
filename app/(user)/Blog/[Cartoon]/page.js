import atas from "@/lib/one.json"
import styles from "./Cartoon.module.css"
const Cartoon=({params})=>{
    const data=atas;

return(
    <div className={styles.container}>
      <img src={data[params.Cartoon-1].src} className={styles.image} alt={data[params.Cartoon-1].title} />
      <h1 className={styles.title}>{data[params.Cartoon-1].des}</h1>
    </div>
)
}
export default Cartoon;