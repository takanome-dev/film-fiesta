import LoginLink from '../LoginLink';
// import Welcome from '../Welcome';

// export function preview() {
//   return <Welcome includeUnsubscribe />;
// }
export function Login() {
  return (
    <LoginLink url="http://localhost:3000/api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fmovies&token=a899db3230ee4515b0d3f5cbc69b4effcfd88f25fe0941d5876f18ef1d8c0100&email=test%40example.com" />
  );
}
