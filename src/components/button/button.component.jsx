import './button.component.css'

export default function Button({name,type,className,btnLink,clicked}) {
  return (
    <button onClick={clicked} className={className} type={type}>
      <a href={btnLink}>{name}</a>
    </button>
  )
}
