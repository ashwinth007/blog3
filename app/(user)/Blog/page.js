'use client';

import Link from "next/link";
import datas from "@/component/lib/one.json"
import styles from "./Blog.module.css"
const Blog = () => {
    let a = datas;
    return (
        <>
            <div className={styles["body"]}>
                <h1 className={styles["up"]}>Stranger things</h1>
                <div className={styles["one"]}>
                    {
                        a.map((e) => (
                            <Link key={e.id} href={`/Blog/${e.id}`} className={styles["htitle"]}>
                                <img src={e.src} className={styles['image']}></img>
                                <div className={styles["title"]} >{e.title}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Blog;