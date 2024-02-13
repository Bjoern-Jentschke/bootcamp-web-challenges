import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image"

export default function VolOne() {
  const volumeOne = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="./">⬅️ All Volumes</Link>
      <h1>{volumeOne.title}</h1>
      <p>{volumeOne.description}</p>
      <ul>
        {volumeOne.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}, {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={144}
        width={144}
        alt="Pt. One"
      />
      <Link href="the-two-towers">➡️ The Two Towers</Link>
    </>
  );
}
