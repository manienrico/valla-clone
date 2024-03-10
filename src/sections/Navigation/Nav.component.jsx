import { GoPerson } from "react-icons/go";
import Button from "../../components/button/button.component"
import "./nav.component.css"

function Nav() {
  return (
    <nav>
        <h3 className="lnav">Val<span className="logo">la</span></h3>
        <div className="rnav">
        <Button name='Profile' btnLink='#' className='profile' />
        <Button name='Sign In' btnLink='#' className='signin' />
            {/* <div className="profile btn"><a href="#">Profile</a></div>
            <div className="signin btn"><a href="#">Sign In</a></div> */}
        </div>
    </nav>
  )
}

export default Nav