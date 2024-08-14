<<<<<<< HEAD
// import React from "react";
// import BannerImg from "../assests/giftImage.webp";
// import { FaGift } from "react-icons/fa6";
// import { FaGrinHearts } from "react-icons/fa";
// import { FaHandHoldingHeart } from "react-icons/fa6";
// import abcImg from "../assests/adBackground.jpg";

  

// const bgImage = {
//   backgroundImage: `url(${abcImg})`,
//   backgroundColor: "#270c03",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

// const Banner = () => {
//   return (
//     <>
//       <span id="about"></span>
//       <div style={bgImage}>
//         <div className="min-h-[550px] flex justify-center items-center py-10 px-10 sm:py-0 ">
//           <div className="container">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Image section */}
//               <div data-aos="zoom-in">
//                 <img
//                   src={BannerImg}
//                   alt="gift box"
//                   className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
//                 />
//               </div>
//               {/* text content section */}
//               <div className="flex flex-col justify-center gap-6 sm:pt-0">
//                 <h1
//                   data-aos="fade-up"
//                   className="text-4xl sm:text-4xl font-bold font-cursive"
//                 >
//                   Premium Gifts !
//                 </h1>
//                 <p
//                   data-aos="fade-up"
//                   className="text-3xl text-black font-semibold tracking-wide leading-8"
//                 >
//                   Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present.
//                 </p>

//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="space-y-5">
//                     <div data-aos="fade-up" className="flex items-center gap-3">
//                       <FaGift className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
//                       <span className="text-2xl">Birthday Gifts</span>
//                     </div>
//                     <div
//                       data-aos="fade-up"
//                       data-aos-delay="300"
//                       className="flex items-center gap-3"
//                     >
//                       <FaGrinHearts className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
//                       <span className="text-2xl">Anniversary Gifts</span>
//                     </div>
//                     <div
//                       data-aos="fade-up"
//                       data-aos-delay="500"
//                       className="flex items-center gap-3"
//                     >
//                       <FaHandHoldingHeart className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
//                       <span className="text-2xl">Wedding Gifts</span>
//                     </div>
//                   </div>
//                   {/* <div
//                     data-aos="slide-left"
//                     className="border-4 bg-transparent border-primary/50 pl-6 space-y-4 shadow-sm"
//                   >
//                     <h1 className="text-2xl font-bold font-cursive ">
//                       Expressing Love and Gratitude
//                     </h1>
//                     <p className="font-semibold text-1xl text-zinc-800">
//                     At GiftPortal, we believe that the best gifts are the ones 
//                     that come from the heart. Whether you're celebrating a birthday, 
//                     anniversary, holiday, or any special moment, we have the 
//                     perfect selection to make every occasion memorable.
//                     </p>
                    
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;




// import React from "react";
// import BannerImg from "../assests/giftImage.webp";
// import { FaGift } from "react-icons/fa6";
// import { FaGrinHearts } from "react-icons/fa";
// import { FaHandHoldingHeart } from "react-icons/fa6";
// import sampleVideo from "../animations/v6.mp4"; // Update the path to your video file

// const Banner = () => {
//   return (
//     <>
//       <span id="about"></span>
//       <div className="relative">
//         {/* Video background */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           src={sampleVideo}
//           title="Background Video"
//         >
//           Your browser does not support the video tag.
//         </video>
//         {/* Overlay for text and content */}
//         <div className="relative min-h-[550px] flex justify-center items-center py-10 px-10 sm:py-0">
//           <div className="container">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Image section */}
//               <div data-aos="zoom-in">
//                 <img
//                   src={BannerImg}
//                   alt="gift box"
//                   className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
//                 />
//               </div>
//               {/* Text content section */}
//               <div className="flex flex-col justify-center gap-6 sm:pt-0">
//                 <h1
//                   data-aos="fade-up"
//                   className="text-4xl sm:text-4xl font-bold font-cursive text-white"
//                 >
//                   Premium Gifts !
//                 </h1>
//                 <p
//                   data-aos="fade-up"
//                   className="text-3xl text-white font-semibold tracking-wide leading-8"
//                 >
//                   Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present.
//                 </p>

//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="space-y-5">
//                     <div data-aos="fade-up" className="flex items-center gap-3">
//                       <FaGift className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
//                       <span className="text-2xl">Birthday Gifts</span>
//                     </div>
//                     <div
//                       data-aos="fade-up"
//                       data-aos-delay="300"
//                       className="flex items-center gap-3"
//                     >
//                       <FaGrinHearts className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
//                       <span className="text-2xl">Anniversary Gifts</span>
//                     </div>
//                     <div
//                       data-aos="fade-up"
//                       data-aos-delay="500"
//                       className="flex items-center gap-3"
//                     >
//                       <FaHandHoldingHeart className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
//                       <span className="text-2xl">Wedding Gifts</span>
//                     </div>
//                   </div>
//                   {/* Optional: Add any additional content here */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;




=======
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
import React from "react";
import BannerImg from "../assests/giftImage.webp";
import { FaGift } from "react-icons/fa6";
import { FaGrinHearts } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
<<<<<<< HEAD
import sampleVideo from "../animations/v6.mp4"; // Update the path to your video file
=======
import abcImg from "../assests/adBackground.jpg";

  

const bgImage = {
  backgroundImage: `url(${abcImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

const Banner = () => {
  return (
    <>
      <span id="about"></span>
<<<<<<< HEAD
      <div className="relative">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={sampleVideo}
          title="Background Video"
        >
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative min-h-[550px] flex justify-center items-center py-10 px-10 sm:py-0">
=======
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-10 px-10 sm:py-0 ">
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="gift box"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
<<<<<<< HEAD
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-4xl sm:text-4xl font-bold font-cursive text-white shadow-lg p-2 bg-black bg-opacity-40 rounded-lg"
                >
                  Premium Gifts!
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-3xl text-white font-semibold tracking-wide leading-8 shadow-md p-2 bg-black bg-opacity-40 rounded-lg"
=======
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-4xl sm:text-4xl font-bold font-cursive"
                >
                  Premium Gifts !
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-3xl text-black font-semibold tracking-wide leading-8"
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
                >
                  Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
<<<<<<< HEAD
                      <FaGift className="text-2xl h-12 w-12 shadow-md p-3 rounded-full bg-red-100" />
                      <span className="text-2xl text-white">Birthday Gifts</span>
=======
                      <FaGift className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span className="text-2xl">Birthday Gifts</span>
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
<<<<<<< HEAD
                      <FaGrinHearts className="text-2xl h-12 w-12 shadow-md p-3 rounded-full bg-orange-100" />
                      <span className="text-2xl text-white">Anniversary Gifts</span>
=======
                      <FaGrinHearts className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span className="text-2xl">Anniversary Gifts</span>
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
<<<<<<< HEAD
                      <FaHandHoldingHeart className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-yellow-100" />
                      <span className="text-2xl text-white">Wedding Gifts</span>
                    </div>
                  </div>
                  {/* Optional: Add any additional content here */}
=======
                      <FaHandHoldingHeart className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span className="text-2xl">Wedding Gifts</span>
                    </div>
                  </div>
                  {/* <div
                    data-aos="slide-left"
                    className="border-4 bg-transparent border-primary/50 pl-6 space-y-4 shadow-sm"
                  >
                    <h1 className="text-2xl font-bold font-cursive ">
                      Expressing Love and Gratitude
                    </h1>
                    <p className="font-semibold text-1xl text-zinc-800">
                    At GiftPortal, we believe that the best gifts are the ones 
                    that come from the heart. Whether you're celebrating a birthday, 
                    anniversary, holiday, or any special moment, we have the 
                    perfect selection to make every occasion memorable.
                    </p>
                    
                  </div> */}
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
