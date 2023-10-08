import Link from "next/link";

export default function Id({ params }) {
  
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}
