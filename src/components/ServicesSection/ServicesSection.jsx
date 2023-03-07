import { useEffect, useRef } from "react"
import './ServicesSection.scss'

const ServicesSection = () => {
  const serviceImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(serviceImageRef.current)
  }, [])

  return (    
    <section className="serviceSection">
      <div className="serviceText">
        <div className="motto">
          Services
        </div>
        <div className="mottoSubtitle">
          We offer a comprehensive range of IT staffing and services to help businesses achieve their technology goals. Our staffing services provide skilled IT professionals to help businesses fill their technology roles with top talent and our consulting services offer expert guidance on IT strategy, planning, and implementation. We also offer project-based solutions, customized to meet the unique needs of businesses, including project management and software development.
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='/assets/servicesImage.png' 
          className='serviceImage'
          ref={serviceImageRef} 
          width={515} height={515}/>
      </div>
    </section>
  )
}

export default ServicesSection
