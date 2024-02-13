import Link from 'next/link';
import { volumes } from "@/lib/data";
import Image from "next/image"

export default function VolOne() {
    const volumeOne = volumes.find(({slug}) => slug === "the-two-towers");
    return (
        <>
        <Link href="./">⬅️ All Volumes</Link>
        <h1>{volumeOne.title}</h1>
        <p>{volumeOne.description}</p>
        <ul>
            {volumeOne.books.map((book) =>
                (<li key={book.ordinal}>{book.ordinal}, {book.title}</li>)
            )}
            
        </ul>
        <Image
        src="/images/the-two-towers.png"
        height={144}
        width={144}
        alt="Pt. One"
      />
       <Link href="the-fellowship-of-the-ring">⬅️ The fellowship of the ring</Link>
       <Link href="the-return-of-the-king">➡️ The return of the king</Link>
        </>
    )
}