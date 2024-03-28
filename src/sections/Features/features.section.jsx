import  {LuShieldCheck}  from "react-icons/lu";
import { LuQrCode } from "react-icons/lu";
import { IoReceiptOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import Feature from '../../components/feature/feature.component'
import './features.section.css'
import img from '../../assests/img-2.jpg'

export default function Features() {
  return (
    <section id="feature">
      <div className="fLeft">
        <Feature picUrl={img} picClassName='fpic' />
      </div>
      <div className="fRight">
        <p id="feat"><LuShieldCheck /><Feature containerName='a' picUrl='' picAlt='' picClassName='' featureWords='Encrypted payment credentials' cFeature='' /></p>
        <p id="feat"><LuQrCode /><Feature containerName='a' picUrl='' picAlt='' picClassName='' featureWords='QR code payments' cFeature='' /></p>
        <p id="feat"><IoReceiptOutline /><Feature containerName='a' picUrl='' picAlt='' picClassName='' featureWords='Reference code payments' cFeature='' /></p>
        <p id="feat"><BsPhone /><Feature containerName='a' picUrl='' picAlt='' picClassName='' featureWords='In-App budgeting' cFeature='' /></p>
      </div>
      </section>
  )
}
