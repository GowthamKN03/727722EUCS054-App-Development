import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesData = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/61Famx7xQwL._AC_UL480_FMwebp_QL65_.jpg",
    name: "Watches",
    description: "A watch is a timeless gift that captures moments and memories with elegance.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51otHFiverL._SX300_SY300_QL70_FMwebp_.jpg",
    name: "Photo Frames",
    description: "A photo frame is a timeless gift that turns cherished moments into lasting memories.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51da1HSwecL._SY500_.jpg",
    name: "Bracelets",
    description: "A bracelet is a stylish gift that wraps your wrist with cherished memories and elegance.",
    aosDelay: "500",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceName) => {
    if (serviceName === "Watches") {
      navigate('/frames?scrollTo=13');
    } else if (serviceName === "Photo Frames") {
      navigate('/frames?scrollTo=1');
    } else if (serviceName === "Bracelets") {
      navigate('/frames?scrollTo=25');
    }
  };

  return (
    <>
      <span id="about"></span>
      <div className="py-20">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Popular Gifts Selected For You
            </h1>
          </div>
          <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-3xl py-20 bg-black hover:bg-primary relative shadow-xl duration-high group max-w-[300px] cursor-pointer"
                onClick={() => handleCardClick(service.name)}
              >
                <div className="h-[160px]">
                  <img
                    src={service.img}
                    alt=""
                    className="rounded-3xl max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full"></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
