import React, { useContext } from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { setUserId } from 'firebase/analytics';


const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || ('/')
    
  
  const handleGoogleSignIn = () => {
        
  signInWithPopup(auth, googleProvider)
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
        setUserId(loggedInUser);
    })
    .catch(error => {
        console.log(error);
    })
    // navigate("/")
}
// const from = location.state?.from?.pathname || "/";
const handleLogin = (event) => {
  event.preventDefault();
  console.log("login");
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password);
  signIn(email, password)
  .then(result => {
    const user = result.user;
    navigate(from, { replace: true });
    console.log(user);
    // navigate("/")
  })
  .catch (error => console.log(error))
};

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
            <div className="mr-12 w-1/2">
                <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" />
              {/* <img src={img} alt="" /> */}
            
            </div>
            </div>
            <div  data-aos="fade-down" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-5xl text-center font-bold text-orange-600">
                  Login
                </h1>
  
                {/* form ////////////////  */}
  
                <form onSubmit={handleLogin}>
                  <div  data-aos="fade-down" className="form-control">
                    <label className="label">
                      <span className="label-text">E-mail</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input data-aos="fade-up"
                      className="btn btn-primary"
                      type="submit"
                      name="submit"
                      value="login"
                    />
                  </div>
                </form>
                <div className="text-center">
                <button className='bg-green-500 px-7 py-2 rounded text-white' onClick={handleGoogleSignIn}>Google</button>
                </div>
  
                <p className="my-4 text-center text-sm">
                  New to ComicVerse?{" "}
                  <Link to="/signup" className="text-orange-600 font-bold">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;