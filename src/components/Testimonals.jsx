import React from "react";
import Slider from "react-slick";
import Image from "../assests/IntoBox.webp"; 
import human1 from "../assests/human1.jpg";
import human2 from "../assests/human2.jpg";
import human3 from "../assests/human3.webp";
import human4 from "../assests/human4.jpeg";
import human5 from "../assests/human5.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Arjun",
    text: "I was looking for a unique birthday present for my best friend and stumbled upon Suprise Hub. The selection is fantastic, and I found the perfect gift. The packaging was beautiful, and my friend was thrilled!",
    img: human1, 
  },
  {
    id: 2,
    name: "Emily S",
    text: "Suprise Hub has become my go-to for all special occasions. The customer service is excellent, and they always have the latest trending gifts. I love the ease of browsing and the quick delivery!",
    img: human2,
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Suprise Hub made my anniversary shopping so easy! The variety of gifts available is amazing, and the delivery was prompt. My wife loved the personalized necklace I got her. Highly recommend!",
    img: human5,
  },
  {
    id: 4,
    name: "Satya Narayan",
    text: "Suprise Hub made my anniversary special with their unique selection of gifts. The customer service was exceptional, helping me choose the perfect gift for my wife. She absolutely loved it! The whole experience was seamless and delightful.",
    img: human4,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}> {/* Moved key here */}
                <div className="bg-slate-50 flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
