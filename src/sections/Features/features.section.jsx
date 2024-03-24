import  LuShieldCheck  from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import Feature from '../../components/feature/feature.component'
import './features.section.css'
import img from '../../assests/img-2.jpg'

export default function Features() {
  return (
    <section>
      <div>
        <Feature picUrl={img} />
      </div>
      <div>
        <Feature containerName='a' picUrl='' picAlt='' picClassName='' featureWords='Encrypted payment credentials' cFeature='' />
        <Feature containerName='a' picUrl='' picAlt='' picClassName='' featureWords='QR code payments' cFeature='' />
        <Feature containerName='a' picUrl='' picAlt='' picClassName='' featureWords='Reference code payments' cFeature='' />
        <Feature containerName='a' picUrl='' picAlt='' picClassName='' featureWords='In-App budgeting' cFeature='' />
      </div>
      </section>
  )
}
