import { useEffect, useState } from "react";
import LoginAPI from "../services/LoginAPI";
import { useNavigate } from "react-router-dom";
import '../index.css'

const LoginPage = () => {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

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
          <button onClick={() => window.location.href = url}>
            Login to Facebook
          </button>
        ) : (
          <p>Loading..</p>
        )
      }
    </>
  );
}

export default LoginPage