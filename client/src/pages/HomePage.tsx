import { useLocation } from 'react-router-dom';

const HomePage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.hash.substring(1));
    const accessToken = queryParams.get('access_token');
    const dataAccessExpirationTime = queryParams.get('data_access_expiration_time');
    const expiresIn = queryParams.get('expires_in');
    const longLivedToken = queryParams.get('long_lived_token');

    console.log({
        accessToken,
        dataAccessExpirationTime,
        expiresIn,
        longLivedToken
    });
    
    return(<></>)
}

export default HomePage 