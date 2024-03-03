import './button.component.css'

export default function Button({name,type,className,}) {
  return (
    <button className={className} type={type}>
        {name}
    </button>
  )
}
