import Link from "next/link";
import styles from './page.module.css'

export default function Setup() {

  return (
    <div className={styles.page}>
      {/* <h1>Setup</h1> */}
      {/* <Link href="../">Home</Link> */}
      <Link href="/setup/new" className={styles.choice}>
        <span>Start New</span>
      </Link>
      <Link href="/setup/1234-41234-2342" className={styles.choice}>
        <span>Load Existing</span>
      </Link>
    </div>
  )
}
