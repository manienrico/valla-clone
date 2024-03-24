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
      <div></div>
      </section>
  )
}
