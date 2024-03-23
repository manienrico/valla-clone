import { RiTwitterXFill } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";

export default function Bagia({bagiaContainer,cHead,ulContainer}) {
  return (
    <div className={bagiaContainer}>
        <span className={cHead}>Valla</span>
        <ul className={ulContainer}>
            <li><a href="#"><RiTwitterXFill /></a></li>
            <li><a href="#"><FiLinkedin /></a></li>
            <li><a href="#"><IoLogoInstagram /></a></li>
        </ul>
    </div>
  )
}
