import React from "react";

const ListItem = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto sm:px-6 lg:px-8 pb-5">
      <div className="overflow-hidden shadow-md">
        <div className="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
          {data.name}
        </div>
        <div className="p-6 bg-white border-gray-200 text-center">
          <a
            className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase"
            href={`${data.web_pages[0]}`}
          >
            Go to website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
