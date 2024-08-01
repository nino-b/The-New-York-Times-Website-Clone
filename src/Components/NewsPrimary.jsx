import { useCallback, useEffect, useState } from "react";
import fetchData from "../utils/JSUtils/fetchData";


function NewsPrimary({fetchedData}) {
  return (
    <div>
      {
        fetchedData.forEach(entry => {})
      }
    </div>
  );
}


const TOP_STORIES = process.env.PARCEL_TOP_STORIES;


function News() {
  const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${TOP_STORIES}`;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchData(url, setArticles);
  }, []); 
}

    {/** */}












function Sections() {
  return (
    <div>
      {/* Politics */}
      <section>
        {/** 
         * Politics API
         * Save the data in local storage
         * Render 9 entries
        */}
      </section>

      {/* Science */}
      <section>
        {/** 
         * Science API
         * Save the data in local storage
         * Render 5 entries
         * 
         * display: grid
         * col-2 row-3
         * 
         * first entry - spans 2 cols
         * others span 1 col
        */}
      </section>

      {/* Opinion */}
      <section>
        {/** 
         * Opinion API
         * Save the data in local storage
         * Render 10 entries
         * 
         * flex. column
        */}
      </section>

      {/* World - aside */}
      <section>
        {/** 
         * Politics API
         * Save the data in local storage
         * Render 9 entries
        */}
      </section> 

      {/* Sports */}
      <section>
        {/** 
         * Politics API
         * Save the data in local storage
         * Render 9 entries
        */}
      </section>
      
      {/* World */}
      <section>
        {/** 
         * Politics API
         * Save the data in local storage
         * Render 9 entries
        */}
      </section>

      {/* World - Full width*/}
      <section>
        {/** 
         * Politics API
         * Save the data in local storage
         * Render 9 entries
        */}
      </section>

      {/* Sports - Full width */}
      <section>
        {/** 
         * Politics API
         * Save the data in local storage
         * Render 9 entries
        */}
      </section>

      {/* Health - Full width*/}
      <section>
        {/** 
         * Politics API
         * Save the data in local storage
         * Render 9 entries
        */}
      </section>

      {/* Travel - Full width*/}
      <section>
        {/** 
         * Politics API
         * Save the data in local storage
         * Render 9 entries
        */}
      </section>

      {/* All - Full width*/}
      <section>
        {/** 
         * Politics API
         * Save the data in local storage
         * Render 9 entries
        */}
      </section>
    </div>
  );
}


function NewsPrimary({entry}) {
  return (
    <section>
      <article key={entry.title} className="">
        <div>
          <h2>{entry.title}</h2>
          <p>{entry.abstract}</p>
        </div>
        <div>
          <picture>

          {entry.multimedia.length > 0 && (
            <>
              <source
                srcset={entry.multimedia[0].url}
                media={entry.multimedia.width >= 1200 ? `(min-width: ${entry.multimedia.width}px)` : `(max-width: ${entry.multimedia.width}px)`}
              />
              <p>{entry.multimedia[0].copyright}</p>
            </>
          )}
            <img
              src={entry.multimedia[0].url}
              alt={entry.title}
            />
          </picture>
        </div>
      </article>
    </section>
  );
}


/* 

npm init -y
npm i -D parcel
npm i react react-dom

"source": "/src/index.html",
"scripts": {
  "start": "parcel",
  "build": "parcel build"
}

npm start

import ReactDOM from 'react-dom';
function App() {
return (
<h1>App Component</h1>
)}
ReactDOM.render(<App />, document.getElementById('root'));
*/


/* 
npx create-react-app

*/



/* 
npm init -y
npm i -D jest


"scripts": {
  "test": "jest"
}


npm test

.babelrc
{
"presets": ["@babel/present/env"]
}
npm i -D @babel/present-env

when we import fils in jest file, we need to add their extensions to them: .js


*/