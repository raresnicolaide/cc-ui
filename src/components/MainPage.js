import React, { useState } from "react";
import Hero from "./Hero";
import MailForm from "./MailForm";
import Searchbar from "./Searchbar";
import UniversitiesList from "./UniversitiesList";

const MainPage = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [universities, setUniversities] = useState(null);
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <div id="MainPage">
      <Hero
        setIsSearchVisible={setIsSearchVisible}
        setUniversities={setUniversities}
        setIsContactVisible={setIsContactVisible}
      />
      {isSearchVisible && (
        <Searchbar
          setUniversities={setUniversities}
          setIsSearchVisible={setIsSearchVisible}
        />
      )}
      {universities && <UniversitiesList universities={universities} />}

      {isContactVisible && <MailForm />}
    </div>
  );
};

export default MainPage;
