import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { LuFileText } from "react-icons/lu";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SliderCard = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="bg-white max-w-[250px] overflow-hidden">
      <div className="flex justify-between border-b pb-2">
        <div className="flex items-center space-x-3">
          <span className="size-6">
            <LuFileText className="size-full" />
          </span>
          <span>Qisa Meqaleler</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleNext}
            className="size-6 rounded-full bg-skyBlue flex items-center justify-center"
          >
            <FaAngleLeft className="text-white" />
          </button>
          <button
            onClick={handlePrev}
            className="size-6 rounded-full bg-skyBlue flex items-center justify-center"
          >
            <FaAngleRight className="text-white" />
          </button>
        </div>
      </div>
      <div className="text-xs">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            renderBullet: function () {
              return `<span class=swiper-pagination-bullet ></span>`;
            },
          }}
          onInit={(swiper) => {
            const paginationElement = swiper.pagination.el;
            if (paginationElement) {
              paginationElement.style.marginBottom = "-10px";
            }
          }}
        >
          {[1, 2, 3].map((index) => (
            <SwiperSlide key={index}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                distinctio ipsa. Ut perferendis ullam modi amet mollitia
                reprehenderit deserunt temporibus doloribus nam fugiat atque
                quaerat iste magnam sapiente, numquam quod itaque? Perferendis
                inventore dolor illo aliquid aliquam sunt neque in omnis et,
                adipisci, laudantium aperiam modi quidem, quae possimus
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
