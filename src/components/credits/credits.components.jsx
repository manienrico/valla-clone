import Credit from '../credit/credit.component'
import './credits.component.css'

export default function Credits() {
  return (
    <ul id='credits'>
        <li><Credit creditWord='Terms' creditContainer='credit-link' /></li>
        <li><Credit creditWord='Privacy' creditContainer='credit-link' /></li>
        <li><Credit creditWord='FAQs' creditContainer='credit-link' /></li>
        <li><Credit creditWord='Help' creditContainer='credit-link' /></li>
    </ul>
  )
}
