import React, { useState, useEffect } from "react";
import fetchData from "../utils/JSUtils/fetchData";
import groupObjectsByMatchingValues from "../utils/JSUtils/groupObjectsByMatchingValues";
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
        if (contentType === 'world') {
          const group = groupObjectsByMatchingValues(result);
          setData(group); 
        } else {
          setData(result.results.slice(0, entryCount)); 
        } 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);  // Ensure loading state is updated
      }
    })();
  }, []);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>;

  if (contentType === 'world') {
    return (
      <div className="sm:w-[100%] lg:w-[70%] flex flex-wrap p-4 border">
        {data && data.map(subArr => {
          return (
            <div key={id++} className="border-b border-b-black">
              <Article data={subArr} />
            </div>
          );
        })}
      </div>
    );
  } 
  else {
    return (
      <div className="w-[70%] sm:w-[100%] p-4">
        {data && <Article data={data} />}
      </div>
    );
  }  
}

export default Section;
