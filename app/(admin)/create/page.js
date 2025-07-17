"use client";
import Link from "next/link";
const create = () => {
    return (
        <>
            <h1>create Blog</h1>
            <Link href="/update" className="hello">Update Blog</Link><br></br>
            <Link href="/Blog">List all blogs</Link>
        </>
    )
}
export default create;