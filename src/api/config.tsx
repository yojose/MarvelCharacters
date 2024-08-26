const publickey = process.env.REACT_APP_API_PUBLIC_KEY;
const privatekey = process.env.REACT_APP_API_PRIVATE_KEY;
const baseUrl= process.env.REACT_APP_API_BASE_URL;
const charactersLimit=50;

console.debug(process.env.REACT_APP_API_PUBLIC_KEY)

export {publickey, privatekey, baseUrl, charactersLimit};