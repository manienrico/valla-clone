import { RiTwitterXFill } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";

export default function Bagia({bagiaContainer,cHead,ulContainer,sociaLink}) {
  return (
    <div className={bagiaContainer}>
        <span className={cHead}>Valla</span>
        <ul className={ulContainer}>
            <li><a href="#" className={sociaLink}><RiTwitterXFill /></a></li>
            <li><a href="#" className={sociaLink}><FiLinkedin /></a></li>
            <li><a href="#" className={sociaLink}><IoLogoInstagram /></a></li>
        </ul>
    </div>
  )
}
