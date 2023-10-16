import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = ({ providers }: { providers: AppProps }) => {

  Object.values(providers).map((provider) => console.log(provider))

  const [active, setActive] = useState("")

  const handleActive = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setActive("active")
  }

  const handleQuitActive = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setActive("")
  }

  return (
    <>
      <Head>
        <title>Echo Flow App - Login</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className={`container-login ${active}`}>
          <div className="form-container-login sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a className="icon hover:cursor-pointer hover:bg-sky-100" onClick={() => signIn("google", { callbackUrl: `${window.location.origin}` })}>
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faFacebook} color='blue' />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <span className="text-xs">or use your email for registeration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container-login sign-in">
            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a className="icon hover:cursor-pointer hover:bg-sky-100" onClick={() => signIn("google", { callbackUrl: `${window.location.origin}` })}>
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faFacebook} color='blue' />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget Your Password?</a>
              <button>
                Sign In
              </button>
            </form>
          </div>
          <div className="toggle-container-login absolute">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button id="login" onClick={handleQuitActive}>Sign In</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p >Register with your personal details to use all of site features</p>
                <button id="register" onClick={handleActive}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  );
}

export default Login

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}

{/*
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
 */}