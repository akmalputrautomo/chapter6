import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      navigate(`/searchresult/${search}`);
    } else {
      navigate("/halaman");
    }
  }
  return (
    <form className="relative flex items-center w-1/2 " onSubmit={handleSubmit}>
      <input placeholder="what do you want to watch?" onChange={(e) => setSearch(e.target.value)} className=" bg-transparent outline outline-1 outline-red-500 pl-4 pr-10 py-2 rounded-full w-full text-white" type="text"></input>
      <button type="submit" className="mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute text-white right-3 cursor-pointer ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </form>
  );
};

export default Search;
