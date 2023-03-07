import { useEffect, useRef } from 'react'
import './WelcomeSection.scss'

const WelcomeSection = () => {
  const welcomeImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(welcomeImageRef.current)
  }, [])

  return (    
    <section className="welcomeSection">
      <div className="welcomeText">
        <div className="motto">
          Your IT Partner for Unmatched Performance and Efficiency.
        </div>
        <div className="mottoSubtitle">
          Our IT services at Nxgentekhub are designed to deliver unmatched performance and efficiency to help our clients stay ahead of the competition, making us their trusted IT partner.
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='/assets/welcomeImage.png' 
          className='welcomeImage'
          ref={welcomeImageRef} 
          width={576*1.1} height={360*1.1}/>
      </div>
    </section>
  )
}

export default WelcomeSection
