import Link from 'next/link'
import styles from './page.module.css'


export default function Home() {
  return (
    <main>
      <h1>welcome to splatbracket</h1>
      <nav>
        <Link href="/setup">Start</Link>
      </nav>
    </main>
  )
}
