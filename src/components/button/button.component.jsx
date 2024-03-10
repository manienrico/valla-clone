import './button.component.css'

export default function Button({name,type,className,btnLink,clicked,aLink}) {
  return (
    <button onClick={clicked} className={className} type={type}>
      <a className={aLink} href={btnLink}>{name}</a>
    </button>
  )
}
