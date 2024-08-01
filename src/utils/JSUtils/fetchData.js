

export default async function fetchData(contentCategory) {
  const TOP_STORIES_API_KEY = process.env.REACT_APP_TOP_STORIES;
  const URL = `https://api.nytimes.com/svc/topstories/v2/${contentCategory}.json?api-key=${TOP_STORIES_API_KEY}`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;

  } catch(error) {
    console.error(`Error fetching the data from the category: ${contentCategory}`, error);
    throw error;
  }
}













































/* 

const TOP_STORIES = process.env.PARCEL_TOP_STORIES;

const apiList = {
  world: `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${TOP_STORIES}`,
  us: `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${TOP_STORIES}`,
  science: `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${TOP_STORIES}`,
  home: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${TOP_STORIES}`,
  arts: `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${TOP_STORIES}`,
}


export default async function fetchData(url, callback) {
  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log('fetched data', data);

    if (callback) {
      callback(data.results);
    }

  } catch(error) {
    console.error('Error fetching data:', error)
  }
}

getData(); */