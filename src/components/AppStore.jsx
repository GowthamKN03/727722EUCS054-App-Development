import React from "react";
import AppStoreImg from "../assests/appstore.png";
import PlayStoreImg from "../assests/playstore.png";

const AppStore = () => {
    return (
      <>
        <div className="py-14 bg-slate-900" >
          <div className="container">
            <div className="grid sm:grid-cols-1 grid-cols-1 items-center gap-4">
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="space-y-6 max-w-xl mx-auto"
              >
                {/* text section */}
                <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                  Suprise Hub is available for Android and IOS
                </h1>
                {/* img section */}
                <div className="flex flex-wrap justify-center sm:justify-start items-center">
                  <a href="#">
                    <img
                      src={PlayStoreImg}
                      alt="Play store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={AppStoreImg}
                      alt="App store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                </div>
              </div>
              {/* Empty div */}
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AppStore;