import React, { useState, useEffect, useRef } from "react";

const delay = 6000;

const CitiesAndTownOfIran = ({ citiesOfIranData }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === citiesOfIranData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <section className="bg-white relative mt-[-70px] py-[50px] px-[50px] rounded-[23px] shadow-md">
        <div className="mx-3">
          <div className="flex flex-col w-full ">
            <div className="text-center ">
              <h2 className="text-[30px] mb-[30px] text-[#2a2a2a]">
                Iran's <span className="text-teal-color">Cities & Towns</span>
              </h2>
            </div>
            <div className="my-0 mx-auto overflow-hidden max-w-[500px]">
              <div
                className="whitespace-nowrap "
                style={{
                  transform: `translate3d(${-index * 100}%, 0, 0)`,
                  transition: "ease 0.25s",
                }}
              >
                {citiesOfIranData.map((slide, index) => (
                  <div
                    key={index}
                    className="rounded-[10px] w-full h-[400px] overflow-hidden inline-block relative "
                  >
                    <img
                      src={slide.image}
                      alt="imag"
                      className="aspect-square w-full h-full"
                    />
                    <h4 className="absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold">
                      {citiesOfIranData.townName}
                    </h4>
                  </div>
                ))}
              </div>
              <div className="text-center">
                {citiesOfIranData.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${
                      index === idx
                        ? "text-center inline-block w-5 h-5 rounded-full cursor-pointer mt-[15px] mx-[7px] mb-0 bg-[#6a0dad]"
                        : " text-center inline-block w-5 h-5 rounded-full cursor-pointer mt-[15px] mx-[7px] mb-0 bg-[#c4c4c4]"
                    }`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CitiesAndTownOfIran;

// import React, { useEffect, useState, useRef } from "react";

// import { citiesOfIranData } from "../../sliders/citiesAndTownSlider/index";

// const delay = 6000;

// const CitiesAndTownOfIran = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const timeoutRef = useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setCurrentSlide((prevIndex) =>
//           prevIndex === citiesOfIranData.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [currentSlide]);

//   const goToSlide = (slideIndex) => {
//     setCurrentSlide(slideIndex);
//   };
//   return (
//     <>
//       <section className="bg-white relative mt-[-70px] py-[50px] px-[50px] rounded-[23px] shadow-md">
//         <div className="mx-3">
//           <div className="flex flex-col w-full ">
//             <div className="text-center ">
//               <h2 className="text-[30px] mb-[30px] text-[#2a2a2a]">
//                 Iran's <span className="text-teal-color">Cities & Towns</span>
//               </h2>
//             </div>
//             <div
//               className="rounded-[10px] overflow-hidden relative"


//             >
//               <img
//                 src={citiesOfIranData[currentSlide].image}
//                 alt="imag"
//                 className="aspect-square w-full h-full"
//               />
//               <h4 className="absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold">
//                 {citiesOfIranData[currentSlide].townName}
//               </h4>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CitiesAndTownOfIran;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";

// import React from "react";

// const CitiesAndTownOfIran = ({ citiesOfIranData }) => {
//   return (
//     <>
//       <section className="bg-white relative mt-[-70px] py-[50px] px-[50px] rounded-[23px] shadow-md">
//         <div className="mx-3">
//           <div className="flex flex-col w-full ">
//             <div className="text-center ">
//               <h2 className="text-[30px] mb-[30px] text-[#2a2a2a]">
//                 Iran's <span className="text-teal-color">Cities & Towns</span>
//               </h2>
//             </div>
//             <div className="rounded-[10px] overflow-hidden relative max-w-[7216]">
//               <Swiper
//                 modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//                 spaceBetween={50}
//                 slidesPerView={1}

//                 autoplay={true}
//                 pagination={{ clickable: true }}
//                 onSlideChange={() => console.log("slide change")}
//                 onSwiper={(swiper) => console.log(swiper)}
//               >
//                 {citiesOfIranData.map((slide) => (
//                   <SwiperSlide key={slide.image}>
//                     <img
//                       src={slide.image}
//                       alt="imag"
//                       className="aspect-square w-full h-full"
//                     />
//                     <h4 className="absolute left-[30px] bottom-[30px] text-[20px] text-white font-bold">
//                       {slide.townName}
//                     </h4>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CitiesAndTownOfIran;