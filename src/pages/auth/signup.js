import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
// import { auth } from "../../firebase";
import 'react-toastify/dist/ReactToastify.min.css';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginStart, loginFailure, loginSuccess } from "../../redux/userRedux"; 
import { login } from "../../redux/apiCalls";
import { useForm } from "react-hook-form";



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const dbAuth = async (token) => {
    const data = await axios.post(
      process.env.REACT_APP_BASE_URL + `users/fbauth`,
      {},
      {
        headers:{
          token,
        }
      }
    )
    setUser(data?.data)
    console.log(user)
  }

  // const handleClick = async (event) => {
  //   event.preventDefault();
  //   dispatch(loginStart());
  //   await createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const fbuser = userCredential?.user;
  //       dbAuth(fbuser.accessToken);
  //       const id = user?._id
  //       console.log(id);
  //       dispatch(loginSuccess(...fbuser, id));
  //       toast.success(`Account created with ${email}`, {
  //         position: toast.POSITION.TOP_CENTER,
  //         onClose: <Link to='/'/>
  //       });
  //     }
  //     ).catch((error) => {
  //       dispatch(loginFailure());
  //       const errorCode = error.code;
  //         const errorMessage = error.message;
  //         if(error){
  //           console.log(`error ${errorCode} msg : ${errorMessage}`)
  //           toast.error(`Sorry! ${errorMessage}`, {
  //             position: toast.POSITION.TOP_CENTER
  //           })
  //         }
  //         return false
  //     })
  // }

  const loginHandler = async () => {
    const body = { name, email, password }
    login(dispatch, body, `users/register`, navigate, "cart")
    // console.log(body);
   }

  // const googleSignIn = () => {
  //   const provider = new GoogleAuthProvider()
  //   dispatch(loginStart());
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result?.user;
  //       dispatch(loginSuccess(user));
  //       dbAuth(token);
  //       toast.success(`Ecofreaky welcomes you. ${user.displayName}`, {
  //         position: toast.POSITION.TOP_CENTER,
  //         onClose: <Link to='/'/>
  //       });
  //       // ...
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       dispatch(loginFailure());
  //       console.log(errorCode)
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       if(error){
  //         toast.error(`Sorry! something went wrong.`, {
  //           position: toast.POSITION.TOP_CENTER
  //         })
  //       }
  //       // ...
  //     });

  // }

  return (
    <div>
      <main>
        <section className="absolute w-full h-full backdrop-blur-lg mt-5">
          <div
            className="absolute top-0 w-full h-full"
            style={{
              // backgroundImage: require("../../assets/16.jpg"),
              backgroundSize: "10%",
            }}
          >
            <div className="blur-md w-full h-full">
              <svg
                className="BA"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="70vh"
                viewBox="0 0 1440 540"
              >
                <g mask='url("#SvgjsMask1046")' fill="none">
                  <path
                    d="M736 33L895 192"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M63 47L-215 -231"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M9 228L-190 29"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M472 248L204 -20"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M41 84L-225 -182"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M168 503L-137 198"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M722 269L341 -112"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1429 199L1143 -87"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M488 431L890 833"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M442 305L782 645"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M392 22L21 -349"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M577 321L743 487"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M350 340L174 164"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M811 513L598 300"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M871 411L1172 712"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M420 463L709 752"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M373 213L20 -140"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M1346 295L1661 610"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M977 191L1224 438"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1215 511L1542 838"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M507 95L219 -193"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M934 462L1354 882"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M238 265L436 463"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1116 394L892 170"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1090 55L1347 312"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M415 380L243 208"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M439 462L88 111"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M415 280L775 640"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M976 488L1124 636"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M947 150L789 -8"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M445 489L860 904"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M705 240L334 -131"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M42 499L432 889"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M634 214L917 497"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M525 427L914 816"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1035 402L655 22"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M1388 19L995 -374"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M397 298L806 707"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1419 535L1061 177"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                </g>
                <defs>
                  <mask id="SvgjsMask1046">
                    <rect width="1440" height="560" fill="#ffffff"></rect>
                  </mask>
                  <linearGradient
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                    id="SvgjsLinearGradient1047"
                  >
                    <stop stopColor="rgba(3, 255, 27, 0)" offset="0"></stop>
                    <stop stopColor="rgba(3, 255, 27, 1)" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                    id="SvgjsLinearGradient1048"
                  >
                    <stop stopColor="rgba(0, 34, 56, 0)" offset="0"></stop>
                    <stop stopColor="rgba(0, 34, 56, 1)" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                    id="SvgjsLinearGradient1049"
                  >
                    <stop stopColor="rgba(0, 34, 56, 0)" offset="0"></stop>
                    <stop stopColor="rgba(0, 34, 56, 1)" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                    id="SvgjsLinearGradient1050"
                  >
                    <stop stopColor="rgba(3, 255, 27, 0)" offset="0"></stop>
                    <stop stopColor="rgba(3, 255, 27, 1)" offset="1"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightgreen border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Register With
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      {/* <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={require("assets/img/github.svg").default}
                        />
                        Github
                      </button> */}
                      {/* <button
                        className="bg-blue bg-opacity-80 active:bg-gray-100 text-lightgreen px-10 space-x-2 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={googleSignIn}
                      >
                        <img
                          alt="..."
                          className="w-5 mb-1"
                          src={require("../../assets/icons/google.svg").default}
                        />
                        <p>Google</p>
                      </button> */}
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      {/* <small>Or sign in with credentials</small> */}
                    </div>
                    <form onSubmit={handleSubmit(loginHandler)}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Full Name
                        </label>
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Full name"
                          onChange={(e) => setName(e.target.value)}
                          style={{ transition: "all .15s ease" }}
                          autoFocus
                        />
                        <span className="text-small mt-4 p-3 text-brown">
                          {errors.name?.type === "required" &&
                            "Please enter your name"}
                        </span>
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ transition: "all .15s ease" }}
                        />
                        <span className="text-small mt-4 p-3 text-brown">
                          {errors.email?.type === "required" &&
                            "Email is required"}
                        </span>
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          {...register("password", { required: true })}
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="text-small mt-4 p-3 text-brown">
                          {errors.password?.type === "required" &&
                            "Password is required"}
                        </span>
                      </div>
                      {/* <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div> */}

                      <div className="text-center mt-6">
                        {/* <button
                          className="bg-blue text-lightgreen bg-opacity-80 active:bg-blue text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button> */}
                        <hr className="m-6 border-b-1 border-gray-400" />
                        <button
                          className="bg-blue text-lightgreen bg-opacity-80 active:bg-blue text-sm font-bold uppercase px-6 py-3 mt-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => {
                            handleSubmit(loginHandler);
                          }}
                        >
                          create new account
                        </button>
                      </div>
                    </form>
                    <div className="w-1/2 pt-2 px-1">
                      <Link to="/Login">
                        <small className="underline decoration-solid hover:decoration-wavy">
                          Sign In instead?
                        </small>
                      </Link>
                    </div>
                    <div className="w-full pt-2 px-1">
                      <Link to="/tos">
                        <small className="text-sm underline decoration-solid hover:decoration-wavy">
                          By registering you agree to our polices
                        </small>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 p-2">
                  {/* <div className="w-1/2 text-right">
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Create new account</small>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default SignUp;