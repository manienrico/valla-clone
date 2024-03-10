import { GoPerson,GoSignIn } from "react-icons/go";
import Button from "../../components/button/button.component"
import "./nav.component.css"

function Nav() {
  return (
    <nav>
        <h3 className="lnav">Val<span className="logo">la</span></h3>
        <div className="rnav">
        <span><GoPerson /><Button name='Profile' btnLink='#' className='profile' /></span>
        <span><GoSignIn /><Button name='Sign In' btnLink='#' className='signin' /></span>
        </div>
    </nav>
  )
}

export default Nav