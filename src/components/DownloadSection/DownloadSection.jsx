import { useEffect, useRef } from "react"
import React from 'react';
import './DownloadSection.css'


const DownloadSection = () => {
  const downloadImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(downloadImageRef.current)
  }, [])
  
  return (
    <section className="downloadSection">
      <div className="imageSection">
        <img 
          //src='../src/images/appsImage.png' 
          className='downloadImage'
          alt=""
          ref={downloadImageRef} 
          width={0} height={0}/>
      </div>
      {/* <div className="downloadText">
        <div className="downloadTitle">
          Our Services Are Available Anytime, Anywhere.
        </div>
        <div className="downloadSubtitle">
          Download the app today!
        </div>
        <div className="downloadButtons">
        </div> 
      </div>*/}
    </section>
  )
}

export default DownloadSection
