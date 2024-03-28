import  {LuShieldCheck}  from "react-icons/lu";
import { LuQrCode } from "react-icons/lu";
import { IoReceiptOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import Feature from '../../components/feature/feature.component'
import './features.section.css'
import img from '../../assests/img-2.jpg'
import Text from "../../components/text/text.component";

export default function Features() {
  return (
    <section id="feature">
      <div className="fLeft">
        <Feature picUrl={img} picClassName='fpic' />
      </div>
      <div className="fRight">
        <h3>Key Features</h3>
        <div className="">
          <p id="feat"><LuShieldCheck size='1.8rem' /><Text words='Encrypted payment credentials' /></p>
          <p id="feat"><LuQrCode size='1.8rem' /><Text  words='QR code payments' /></p>
          <p id="feat"><IoReceiptOutline size='1.8rem' /><Text words='Reference code payments' /></p>
          <p id="feat"><BsPhone size='1.8rem' /><Text words='In-App budgeting' /></p>
        </div>
      </div>
      </section>
  )
}
