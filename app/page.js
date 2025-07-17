import Image from "next/image";
import Link from "next/link";
import "./globals.css"
export default function Home() {
  return (
    <>
    <div className="full">
    <header className="top">Stranger Things Blog</header>
    <main>
      <div className="index">
        <Link href="/Blog"><button className="mainbtn">User</button></Link>
        <Link href="/login"><button className="mainbtn">Admin</button></Link>
      </div>
    </main>
    </div>
    </>
  );
}
