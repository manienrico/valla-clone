import Picture from '../pic/pic.component'
import Text from '../text/text.component'
import './feature.component.css'

export default function Feature({containerName, picUrl,picAlt,picClassName,featureWords,cFeature}) {
  return (
    <div className={featureContainer}>
        <Picture cName={containerName}  pic={picUrl} altText={picAlt} picName={picClassName} />
        <Text words={featureWords} wName={cFeature} />
    </div>
  )
}
