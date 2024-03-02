import Credit from '../credit/credit.component'
import './credits.component.css'

export default function Credits() {
  return (
    <ul>
        <li><Credit creditWord='Terms' /></li>
        <li><Credit creditWord='Privacy' /></li>
        <li><Credit creditWord='FAQs' /></li>
        <li><Credit creditWord='Help' /></li>
    </ul>
  )
}
