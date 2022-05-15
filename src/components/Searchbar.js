import React, { useState } from "react";
import ErrorComponent from "./ErrorComponent";
import axios from "axios";

const Searchbar = ({ setUniversities, setIsSearchVisible }) => {
  const [searchedElement, setSearchedElement] = useState("");
  const [showError, setShowError] = useState(false);

  const getUniversitiesByCountry = (country) => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setShowError(true);
        } else {
          setUniversities(data);
          setIsSearchVisible(false);
        }
      });
  };
  const getDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate() + 1;

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/universities`, {
      country: `${event.target[0].value}`,
      searchDate: `${getDate()}`,
    });
    getUniversitiesByCountry(event.target[0].value);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search countries..."
            required
            onChange={(e) => setSearchedElement(e.target.value)}
            value={searchedElement}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <p className="mt-5">Enter your desired country</p>
      {showError && <ErrorComponent />}
    </div>
  );
};

export default Searchbar;
