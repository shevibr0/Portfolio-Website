import React from 'react'
import './recommendations.css'
import Image1 from "../../assets/recommand1.png";
import Image2 from "../../assets/recommand2.png";
import Image3 from "../../assets/recommand3.png";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Talia Diamant",
    subtitle: "Social worker and student guide",
    comment:
      "I worked alongside Elisheva for five years, Elisheva is a special woman, hardworking and goal-oriented, her teamwork is worthy of appreciation and it is always pleasant to be around her. Good luck! 👍",
  },
  {
    id: 2,
    image: Image2,
    title: "Sigal Levi",
    subtitle: "Director of the Disability Department in the Welfare Department of Bnei Brak Municipality",
    comment:
      "Elisheva works professionally, accurately, pleasantly and full of knowledge. Always want to learn and progress. Elisheva has contributed a lot to the department and to the clients who have benefited from her professional and humanitarian work.",
  },
  {
    id: 3,
    image: Image3,
    title: "Maya Shoshani",
    subtitle: "Director of the 'Paamonim'  organization, Central Student Branch",
    comment:
      "Elisheva volunteered as a team leader for 15 accompanying families. Elisheva guided and helped with sensitivity, professionalism and great responsibility.",
  },
];

const Recommendations = () => {
  return (
    <section className="testimonials__container section" id='recommendations'>
      <h2 className="section__title">Reviews</h2>
      <Swiper className="testimonials__container grid"
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      grabCursor={true}
      pagination={{ clickable: true }}
    >



        {data.map(({id, image, title,subtitle, comment})=>{
          return <SwiperSlide className="testimonials__item" key={id}>
            <div className="thumb">
              <img src={image} alt=""/>
            </div>
            <h3 className="testimonials__title">{title}</h3>
            <span className="subtitle">{subtitle}</span>
            <div className="comment">{comment}</div>
          </SwiperSlide>
        })}
      </Swiper>
    </section>
  )
}

export default Recommendations