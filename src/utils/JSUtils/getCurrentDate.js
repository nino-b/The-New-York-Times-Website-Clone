

export default function getCurrentDate() {
  const now = new Date();

  const options = { 
    weekday: 'long', 
    month: 'long',  
    day: 'numeric',  
    year: 'numeric'  
  };

  return now.toLocaleDateString('en-US', options);
}