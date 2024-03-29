import Button from "../../components/button/button.component"
import "./hero.component.css"

function Hero() {
  return (
    <>
        <section className="heroGroup">
            <h1>All in one <span className="heroLogo">digital</span><br/> payment solution</h1>
            <p>Simplify your financial life, make transactions easier, faster, and safer<br/> than ever before.</p>
            <div>
                <Button name='Get Started' className='heroBtn' />
            </div>
        </section>
        <center>
          <p className="home-text">Generate a <b>single</b> payment QR code or<br/> reference code for <b>multiple</b> payment options</p>
        </center>
    </>
  )
}

export default Hero