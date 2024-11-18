import { useEffect, useState } from 'react'
import './App.css'
import LoginAPI from './services/LoginAPI.js'

function App() {
  
  const [url, setUrl] = useState('');

  useEffect(()=> {
    const fetchUrl = async () => {
      try {
        const fetchedUrl = await LoginAPI.getUrl();
        setUrl(fetchedUrl);
      } catch (err){
        console.error("Error fetching login url: ", err);
      }
    }

    fetchUrl();
  }, [])

  return (
    <>
      { url ?
        (
          <a href={`${url}`}>
            Login to Facebook
          </a>
        ) : (
          <p>Loading..</p>
        )
      }
    </>
  );
}

export default App
