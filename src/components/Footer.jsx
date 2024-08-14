import React from "react";
<<<<<<< HEAD
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
=======
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
];

const Footer = () => {
  return (
<<<<<<< HEAD
    <div className="text-white bg-slate-900">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Surprise Hub
            </a>
            <p className="pt-4">
              Unwrap the joy of giving with Surprise Hub - where every gift tells a story.
            </p>
            <a
              href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit our YouTube Channel
            </a>
=======
    <div className=" text-white bg-slate-900">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive
"
            >
              Suprise Hub
            </a>
            <p className="  pt-4">
            Unwrap the joy of giving with Suprise Hub - where every gift tells a story.
            </p>
            
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
<<<<<<< HEAD
=======
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200 "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
<<<<<<< HEAD
                <p className="mb-3">Coimbatore, Tamil Nadu</p>
                <p>+91 1234567890</p>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" aria-label="Instagram">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
=======
                <p className="mb-3">Coimbatore , Tamil Nadu</p>
                <p>+91 1234567890</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> ca1764e3b50da736bc9786cc9a0f5f60d9a98906
