import { useRef, useState } from "react"
import './ReviewsSection.scss'

const ReviewsSection = () => {
  return (
    <section className="reviewsSection">
      <div className="reviewTextSection">
        <div className="reviewSectionTitle">
          Reviews
        </div>
        <div className="reviewSectionSubtitle">
          Have a look at what some of our customers are saying about us!
        </div>
      </div>
      <div className="allReviews">
        <div className="review">
          <div className="profilePic">
            <img src="/assets/ProPic.jpeg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              David Wilson
            </div>
            <div className="reviewerLocation">
              San Francisco, CA
            </div>
            <div className="reviewerReview">
              <em>"I have been a customer of this company for years and have always been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="/assets/ProPic.jpeg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Sarah Lee
            </div>
            <div className="reviewerLocation">
              Seattle, WA
            </div>
            <div className="reviewerReview">
              <em>"Nxgentekhub has been an excellent partner for our business. Their team is knowledgeable, dedicated, and goes above and beyond to ensure that we receive the best possible service. They have helped us streamline our IT operations and improve our overall business efficiency. We would definitely recommend their services to others!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="/assets/ProPic.jpeg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Frank Jones
            </div>
            <div className="reviewerLocation">
              Houston, TX
            </div>
            <div className="reviewerReview">
              <em>"I have had nothing but positive experiences with this company. They have always been prompt and efficient, and the products I have purchased from them have exceeded my expectations. I will definitely be a repeat customer!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="/assets/ProPic.jpeg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Samantha Smith
            </div>
            <div className="reviewerLocation">
              Austin, TX
            </div>
            <div className="reviewerReview">
              <em>"Nxgentekhub provided me with invaluable career advice and support during my job search. They helped me tailor my resume and cover letter for the IT industry and connected me with potential employers. I appreciated their personalized approach to job placement, as they took the time to get to know my skills and interests before suggesting job opportunities. I ultimately landed my dream job thanks to nxgentekhub's guidance and support."</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
