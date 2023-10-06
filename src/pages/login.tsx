import { type GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";


const Login = ({providers}: {providers:AppProps}) => {

  return (
    <>
      <h1>
        LOGIN
      </h1>
    <div>
      {Object.values(providers).map((provider) => (
        <button key={provider.id} onClick={() => signIn(provider.id, {
          callbackUrl: `${window.location.origin}`
        })}>Sign in with Google</button>
      ))}
    </div>
    </>
  );
}

export default Login

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {providers}
  }
}