"use client";
import Link from "next/link";
import styles from "./login.module.css";
const login = () => {
    return (
        <>
            <div className={styles.logpg}>
                <div className={styles.right}>
                    <form className={styles.form1}>
                        <h2>Login</h2>
                        <h4>Admins can Login</h4>
                        <input type="text" placeholder='username' className={styles.input} required={true} /><br />
                        <input type="email" placeholder='email' className={styles.input} required={true} /><br />
                        <input type="password" placeholder='password' className={styles.input} required={true} /><br />
                        <Link href="/create"><button className={styles.btn}>Submit</button></Link>
                    </form>
                </div>
            </div>

        </>
    )
}
export default login;