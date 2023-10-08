import Link from "next/link";
import styles from './page.module.css'

export default function Setup() {
  
  return (
    <div>
      <h1>Setup</h1>
      <Link href="../">Home</Link>
      <div className={styles.setup}>
        <h1>Start New</h1>
        <h1>Load Existing <Link href="/setup/987234-2341-12342-1234">987234</Link></h1>
      </div>
    </div>
  )
}
