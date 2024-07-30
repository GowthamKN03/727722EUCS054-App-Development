import React from "react";
import Img2 from "../assests/IntoBox.webp";
import galaxy from "../assests/3dgalaxy.webp";
import flower from "../assests/flower1.webp";
import parker from "../assests/parker.jpg";
import anniversary from "../assests/anniversary.webp";
import alarmclock from "../assests/alarmclock1.jpg";
const ServicesData = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/41VcGGdB0NL._SY445_SX342_QL70_FMwebp_.jpg",
    name: "3D Galaxy Crystal Ball",
    description:
      "Creative Engraved Crystal Ball Night Light, USB Table LED Wooden Crystal Ball for Home Decoration Birthday Gift for Teens, Boys, Girls (Galaxy)(Warm White)",
    
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/61amJGYoEvL._AC_UL480_FMwebp_QL65_.jpg",
    name: "ORORANY Forever Rose",
    description:
    "Galaxy Glass Rose Flower And Butterfly With Led Light Great Gift Ideas For Valentine'S Day",
    
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71qwenPEpZL._AC_UL480_FMwebp_QL65_.jpg",
    name: "Parker Vector Gift Set",
    description:
        " Parker Roller Ball Pen With Parker Logo Round Key Chain",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/51akjqW8Z6L._SY445_SX342_QL70_FMwebp_.jpg",
    name: "CPENSUS DIY 3D Acrylic Writing pad",
    description:
    "CPENSUS DIY 3D Acrylic Writing pad with Pen Message Board rewritable Table lamp for Study LED Light Office Home Decor Gift",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/41F9G9JKy7L._AC_UL480_FMwebp_QL65_.jpg",
    name: "Dynamic Dinosaur Alarm Cloc",
    description:
    "jomparis Dynamic Dinosaur Alarm Clock with Night Light Gift for Kids Boys Girls-Pink",
  },
  {
    id: 6,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRThK5jCzTjKoDVgilpyCaWbOGeWX_Au_3WpG0BU3MSMKLraXEQ4ED8IdIvMyAeXiOcpHIQK7SWUT_5aE0R33hx5YfTYYm-xXbrfiVBOQo",
    name: "Pro6",
    description:
      "A bracelet is a stylish gift that wraps your wrist with cherished memories and elegance.",
    
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/71Q-bzEn37L._SX425_.jpg",
    name: " Krishna Idol Murti with Kamdhenu Cow ",
    description:
    "Gold Plated Showpiece Articles for Home Decor, Office,House Warming",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/41VFtZizr-L._SY300_SX300_QL70_FMwebp_.jpg",
    name: "Moving Sand Art Picture",
    description:
    "3D Natural Landscape showpieces for Home Decor Antique Gifts for Kids Office Desktop Decoration Desk Table Decorative Items",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/61rZGqu7-3L._SY500_.jpg",
    name: "Fashion Frill Exclusive Pendant For Girls",
    description:
    "Infinite/Infinity Gold Plated Chain Necklace For Women Girls Women's Jewellery Gift For Anniversary Stylish Pendant",
  },
 
];
const Products = () => {
  return (
    <>
      <span id="products"></span>
      <div className="py-20">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Explore our products 
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center ">
            {ServicesData.map((service) => (
              <div
                className="rounded-2xl py-20 bg-slate-100 hover:bg-primary hover:text-black hover:bg-slate-300 relative shadow-xl duration-high group max-w-[350px]"
              >
                <div className="h-[160px]">
                  <img
                    src={service.img}
                    alt="image"
                    className="rounded-2xl max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 "
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-black duration-high text-sm line-clamp-2">
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

export default Products;

