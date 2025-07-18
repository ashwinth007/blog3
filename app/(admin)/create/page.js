"use client";
import Link from "next/link";
const create = () => {
    return (
        <>
            <h1 className="head">create Blog</h1>
            <div className="ind">
                <Link href="/update" className="hello">Update Blog</Link><br></br>
                <Link href="/Blog" className="hello">List all blogs</Link>
            </div>

        </>
    )
}
export default create;