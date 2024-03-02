import React from 'react'

export default function Picture({pic,altText}) {
  return (
    <>
        <div>
            <img src={pic} alt={altText} />
        </div>
    </>
  )
}
