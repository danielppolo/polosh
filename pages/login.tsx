import GoogleLogin from 'react-google-login';
import { NextPage } from 'next'

const Login: NextPage = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
  }

  return (
    <GoogleLogin
      clientId="420425462870-1qagnkshdvut7qtke0pnb29cov3n86g6.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Login