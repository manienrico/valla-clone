export default function Picture({pic,altText,cName,picName}) {
  return (
    <>
        <div className={cName}>
            <img src={pic} alt={altText} className={picName} />
        </div>
    </>
  )
}
