class DataManager {
  static #TOP_STORIES = process.env.TOP_STORIES;

  constructor(expirationTime = 1000 * 60 * 60) { 
    // Default to 1 hour
    this.localStorage = localStorage;
    this.expirationTime = expirationTime;
    this.apiList = {
      world: `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${DataManager.#TOP_STORIES}`,
      us: `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${DataManager.#TOP_STORIES}`,
      science: `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${DataManager.#TOP_STORIES}`,
      home: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${DataManager.#TOP_STORIES}`,
      arts: `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${DataManager.#TOP_STORIES}`,
    }
  }

  storeDataInLocalStorage(key, data) {
    const cacheData = {
      timestamp: Date.now(),
      data: data
    };
    this.localStorage.setItem(key, JSON.stringify(cacheData));
  }

  getDataFromLocalStorage(key) {
    const cachedData = this.localStorage.getItem(key);
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      if (Date.now() - timestamp < this.expirationTime) {
        return data;
      } else {
        this.localStorage.removeItem(key); // Remove expired data
      }
    }
    return null;
  }

  async fetchData(url, subject) {
    const cacheKey = subject;
    const cachedData = this.getDataFromLocalStorage(cacheKey);

    if (cachedData) {
      console.log('Data retrieved from localStorage');
      return cachedData;
    }

    try {
      // Fetch data from API if not in localStorage
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
  
      // Store data in localStorage
      this.storeDataInLocalStorage(cacheKey, data);
      console.log('Data retrieved from API and stored in localStorage');
      return data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error; // Rethrow the error to handle it elsewhere
    }
  }
  loadDataPortion(entryCount) {}
}
