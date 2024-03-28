import { RiTwitterXFill } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";

export default function Bagia({bagiaContainer,first,cHead,ulContainer,sociaLink}) {
  return (
    <div className={bagiaContainer}>
        <h3 id={first}>Val<span className={cHead}>la</span></h3>
        <ul className={ulContainer}>
            <li><a href="#" className={sociaLink}><RiTwitterXFill size="1.5rem" /></a></li>
            <li><a href="#" className={sociaLink}><FiLinkedin size="1.6rem" /></a></li>
            <li><a href="#" className={sociaLink}><IoLogoInstagram size="1.5rem" /></a></li>
        </ul>
    </div>
  )
}
