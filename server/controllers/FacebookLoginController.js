import dotenv from 'dotenv'

dotenv.config();

const getUrl = async (req, res) => {
    const loginUrl = `https://www.facebook.com/dialog/oauth?client_id=${process.env.FB_APP_ID}&display=page&extras={"setup":{"channel":"IG_API_ONBOARDING"}}&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}&response_type=token&scope=instagram_basic,instagram_manage_insights,pages_show_list`;
    res.status(200).json({ url: loginUrl });
}

export default { getUrl }