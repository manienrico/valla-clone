import Bagia from '../../components/bagia/bagia.components'
import Credits from '../../components/credits/credits.components'
import './footer.section.css'

export default function Footer() {
  return (
    <footer>
      <Bagia />
        <hr/>
        <section id='lower'>
          <Credits />
          <div className='signature'> &copy;2024 All rights reserved</div>
        </section>
      </footer>
  )
}
