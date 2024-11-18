const getUrl = async () => {
    try{
        const response = await fetch('/api/facebook-login-url');
        if (!response.ok){
            throw new Error('Network Error');
        }

        const data = await response.json();
        const loginUrl = data.url;
        console.log(loginUrl)
        return loginUrl;
    } catch (err){
        console.error(`Error fetching login url`);
        throw err;
    }
};

export default { getUrl }