import './partner.style.css'
import Text from '../../components/text/text.component'

export default function Partners() {
  return (
    <section id='partner-contain'>
        <h3 id='partner-head'>Supported payment options</h3>
        <div id='partner-body'>
            <Text words='MOMO Pay' wName='body-item' />
            <Text words='AirtelMoney' wName='body-item' />
            <Text words='VISA' wName='body-item' />
            <Text words='Chipper Cash' wName='body-item' />
            <Text words='American Express' wName='body-item' />
            <Text words='MasterCard' wName='body-item' />
            <Text words='PayPal' wName='body-item' />
        </div>
    </section>
  )
}
