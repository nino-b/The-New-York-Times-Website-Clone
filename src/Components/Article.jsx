import React from "react";
import { Link } from "react-router-dom";

const Article = ({ data }) => {
  return (
    <div className="w-full p-4 font-serif">
      {data.map((entry, index) => (
        <React.Fragment key={entry.url}>
          <ImageLink entry={entry} />
          <TextLink entry={entry}/>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Article;








function TextLink({entry}) {
  return (
    <Link 
      to="/dummy-link" 
      className="pr-4 w-[35%]"
    >
      <div className="w-[50%]">
        <h2 className="font-bold text-[1.2rem] mt-4">{entry.title}</h2>
        <p className="pb-4 text-gray-600 text-[.7rem] border-b border-b-gray">{entry.abstract}</p>
      </div>
    </Link>
  );
}


function ImageLink({entry}) {
  return (
    <Link 
      to="/dummy-link" 
      className=""
    >
  
      {Array.isArray(entry.multimedia) && (  
          <figure className="flex flex-col w-[50%] self-end ">
          <picture>
            {entry.multimedia.map(media => (
              <source 
                key={media.url}
                media={media.width > 1201 ? `(min-width: ${media.width}px)` : `(max-width: ${media.width * 2}px)`} 
                srcSet={media.url}
              />
            ))}
            <img
              src={entry.multimedia[0].url}
              alt={entry.title}
            />
          </picture>
          <figcaption className="text-[.6rem] text-gray-600 self-end">
            {entry.multimedia[0].copyright}
          </figcaption>
        </figure>
      )}
    </Link>
  );

}

















/* 
import React from "react";
import { Link } from "react-router-dom";

const Article = ({ data }) => {
  return (
    <div className="w-full p-4">
      {data.map((article, index) => (
        <article key={article.title} className="font-serif grid grid-cols-11 grid-rows-autos">
          <Link to="/dummy-link" className="col-start-1 col-span-4 pr-4">
            <div>
              <h2 className="font-bold text-[1.2rem] mt-4">{article.title}</h2>
              <p className="pb-4 text-gray-600 text-[.7rem] border-b border-b-gray">{article.abstract}</p>
            </div>
          </Link>
          <Link to="/dummy-link" className="col-start-5 col-span-7 ">
            {Array.isArray(article.multimedia) && index < 1 && (    
              <figure className="flex flex-col w-full">
                <picture>
                  {article.multimedia.map(media => (
                    <source 
                      key={media.url}
                      media={media.width > 1201 ? `(min-width: ${media.width}px)` : `(max-width: ${media.width * 2}px)`} 
                      srcSet={media.url}
                    />
                  ))}
                  <img
                    src={article.multimedia[0].url}
                    alt={article.title}
                  />
                </picture>
                <figcaption className="text-[.6rem] text-gray-600 self-end">
                  {article.multimedia[0].copyright}
                </figcaption>
              </figure>
            )}
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Article;






*/