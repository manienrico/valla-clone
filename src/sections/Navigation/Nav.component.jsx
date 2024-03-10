import { GoPerson,GoSignIn } from "react-icons/go";
import Button from "../../components/button/button.component"
import "./nav.component.css"

function Nav() {
  return (
    <nav>
        <h3 className="lnav">Val<span className="logo">la</span></h3>
        <div className="rnav">
          <span className="avi" ><GoPerson /><Button name='Jeremy Ma' btnLink='#' className='profile' aLink='links' /></span>
          <span className="in" ><GoSignIn /><Button name='Sign In' btnLink='#' className='signin' aLink='links' /></span>
        </div>
    </nav>
  )
}

export default Nav