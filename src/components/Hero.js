import React from "react";

const Hero = ({ setIsSearchVisible, setUniversities, setIsContactVisible }) => {
  const handleSearch = () => {
    setIsSearchVisible(true);
    setUniversities(null);
    setIsContactVisible(false);
  };

  const handleContact = () => {
    setIsSearchVisible(false);
    setUniversities(null);
    setIsContactVisible(true);
  };
  return (
    <div id="Hero">
      <div className="xl:w-2/4 mt-10 lg:mt-20 text-center pb-10">
        <div className="text-6xl font-semibold text-gray-900 leading-none">
          Search your path
        </div>
        <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
          A curated list of universities around the Globe.
        </div>
        <button
          onClick={handleSearch}
          className="mt-6 mr-10 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
        >
          Search
        </button>
        <button
          onClick={handleContact}
          className="mt-6 ml-10 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Hero;
