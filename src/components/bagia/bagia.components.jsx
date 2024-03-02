export default function Bagia({bagiaContainer,cHead,ulContainer}) {
  return (
    <div className={bagiaContainer}>
        <span className={cHead}>Valla</span>
        <ul className={ulContainer}>
            <li><a href="#">X</a></li>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">instagram</a></li>
        </ul>
    </div>
  )
}
