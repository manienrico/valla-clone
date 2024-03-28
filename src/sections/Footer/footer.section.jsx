import Bagia from '../../components/bagia/bagia.components'
import Credits from '../../components/credits/credits.components'
import './footer.section.css'

export default function Footer() {
  return (
    <footer>
      <div className='footer-contain'>
        <Bagia first='first' cHead='second' sociaLink='tag' bagiaContainer='contain' ulContainer='ulContain' />
        <hr className='hr'/>
        <section id='lower'>
          <Credits />
          <div className='signature'> &copy;2024 All rights reserved</div>
        </section>
      </div>
    </footer>
  )
}
