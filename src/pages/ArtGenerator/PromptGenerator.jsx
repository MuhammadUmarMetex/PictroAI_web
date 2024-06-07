import React from "react";
import HeroSection from "../../components/Dashboard/MainPanel/HeroSection/HeroSection";
import CardsSection from "../../components/Dashboard/MainPanel/CardsSection/CardsSection";

// scss
import "../../components/Dashboard/MainPanel/mainpanel.scss";

const PromptGenerator = () => {
  return (
    <>
      <section className="main pb-0 pt-0 px-0 pe-md-3 pe-lg-0 pe-xl-0  mx-0 d-md-flex d-none mb-5">
        <div className="row w-100 d-flex justify-content-end px-0 mx-0">
          {/* <div className="col-x-lg-10 col-lg-9 col-md-8 col-8 border border-danger"> */}
          <div className="">
            <div className="main_body_content ">
              <HeroSection />
              <CardsSection
                showSnap={false}
                showSnapTitle={false}
                showArtist={false}
                showArtistTitle={false}
                showPrompt={true}
                showPromptTitle={true}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="d-md-none d-flex mobile_msg">
        <p className="text-white text-center">
          Pictro AI web is only available on desktop.
        </p>
      </div>
    </>
  );
};

export default PromptGenerator;
