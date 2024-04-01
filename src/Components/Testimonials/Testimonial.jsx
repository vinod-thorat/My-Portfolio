import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilepic1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatum adipisci aspernatur molestiae temporibus, nulla quaerat quae sapiente dicta dignissimos vero incidunt aperiam laudantium voluptas sint nobis accusamus debitis totam",
    },
    {
      img: profilepic2,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatum adipisci aspernatur molestiae temporibus, nulla quaerat quae sapiente dicta dignissimos vero incidunt aperiam laudantium voluptas sint nobis accusamus debitis totam",
    },
    {
      img: profilepic3,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatum adipisci aspernatur molestiae temporibus, nulla quaerat quae sapiente dicta dignissimos vero incidunt aperiam laudantium voluptas sint nobis accusamus debitis totam",
    },
    {
      img: profilepic4,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatum adipisci aspernatur molestiae temporibus, nulla quaerat quae sapiente dicta dignissimos vero incidunt aperiam laudantium voluptas sint nobis accusamus debitis totam",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Client always get</span>
        <span>Exceptional Work</span>
        <span>From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/*Slider */}

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
