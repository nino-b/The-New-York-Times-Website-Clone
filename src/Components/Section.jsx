import React, { useState, useEffect } from "react";
import fetchData from "../utils/JSUtils/fetchData";
import Article from "./Article";  

let id = 0;

function Section({contentType, entryCount}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // Adding a loading state

  useEffect(() => {
    (async function fetchDataForSection() {
      try {
        const result = await fetchData(contentType);

        setData(result.results); 
        setLoading(false);  // Ensure loading state is updated

      } catch (error) {
        setError(error.message);
      } 
    })();
  }, []);
  console.log('data', data);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>;


    return (
      <div className="w-[70%] sm:w-[100%] p-4">
        {data && <Article data={data} />}
      </div>
    );
  
}

export default Section;
