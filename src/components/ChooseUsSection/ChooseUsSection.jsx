import { useEffect, useRef } from 'react'
import './ChooseUsSection.scss'

import { AiOutlineBarChart as Chart } from 'react-icons/ai'
import { RiComputerLine as Service } from 'react-icons/ri'
//import { MdSupportAgent as Support} from 'react-icons/md'
import { FaPeopleCarry as Community } from 'react-icons/fa'

const ChooseUsSection = () => {
  const cardsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(cardsRef.current)
  }, [])

  return (
    <section className="chooseUsSection">
      <div className="sectionTitle">
        Why Choose Us
      </div>
      <div className="reasonCards" ref={cardsRef}>
        <div className="card">
          <div className="cardSymbol">
            <Chart size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
            Management & Marketing
          </div>
          <div className="cardDesc">
            Are you looking for management & marketing services, we are here to help. Contact us today to learn how we can partner with you to drive your business forward.
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Service size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
            High Quality Service
          </div>
          <div className="cardDesc">
            our experienced professionals are committed to delivering high-quality services that are tailored to our clients' unique needs. We ensure their success in the ever-changing business environment by providing expert solutions.
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Community size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
            A Strong, Growing Community
          </div>
          <div className="cardDesc">
            We are the active contributor to the technology community, fostering collaboration among businesses and professionals to drive innovation and achieve exceptional results.
          </div>
        </div>
        
      </div>
    </section>
  )
}
export default ChooseUsSection
