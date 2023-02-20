import { useEffect, useRef } from 'react'
import './AboutSection.scss'

const AboutSection = () => {
  const aboutImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(aboutImageRef.current)
  }, [])

  return (
    <section className='aboutSection'>
      <div className="aboutLeft">
        <img 
          src='../src/images/aboutUsImage.png' 
          className='aboutImage'
          ref={aboutImageRef} 
          width={750} height={450}/>
      </div>
      <div className="aboutRight">
        <div className="header">
          About Us
        </div>
        <div className="body">
          Nxgentekhub is a leading IT staffing and services company that helps businesses find and hire top IT talent. With a focus on the technology industry, we provide staffing and consulting services to help businesses stay competitive in today's fast-paced digital landscape. Our team of experienced professionals is dedicated to delivering innovative solutions that help our clients achieve their technology goals. At Nxgentekhub, we're committed to providing exceptional service and building long-lasting partnerships with our clients.
        </div>
      </div>
    </section>
  )
}

export default AboutSection
