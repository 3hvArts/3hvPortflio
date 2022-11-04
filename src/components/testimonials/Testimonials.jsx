import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Franky Ocean',
    review: 'I will always love you, How I do Let go of a prayer for you Just a sweet word The table is prepared for you Wishing you godspeed, glory There will be mountains you wont move Still, Ill always be there for you How I do'
  },
  {
    avatar:AVTR2,
    name: 'Juice WRLD',
    review: 'My world revolves around a black hole The same black hole thats in place of my soul uh Empty I feel so goddamn empty I may go rogue Dont tempt me big bullet holes Tote semi-autos'
  },
  {
    avatar: AVTR3,
    name: 'Shiloh Dynasty',
    review: 'Losing Interest You wont find no better than this I swear girl if you leave just let me know So I wont look dumb when you move on'
  },
  {
    avatar: AVTR4,
    name: 'xxxtentacion',
    review: 'I know youre somewhere somewhere Ive been trapped in my mind girl, just holding on I dont wanna pretend theres something, were nothing Ive been stuck thinking bout her, I cant hold back I know youre somewhere somewhere Ive been trapped in my mind girl, just holding on I dont wanna pretend theres something, were nothing Ive been stuck thinking bout her, I cant hold back'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review} ,index) => {
            return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
               <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials