// Initialize Firebase
import {
  getAuth,
  initializeApp,
  firebaseConfig,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from './firebase.js'
export const app = initializeApp(firebaseConfig);
console.log(app);
// const auth = getAuth(app);
// console.log(auth);
// // Check alerady users
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     var showUser = document.getElementById("renderuser")
//     showUser.innerHTML = `welcome ${user.email}`;
//     logoutbtn.style.display = "block";
//     authCantainer.style.display = "none";
//   } else {
//     logoutbtn.style.display = "none";
//     authCantainer.style.display = "block"
//   }
// });
// var authCantainer = document.getElementById("authcantainer")
// var singupEmail = document.getElementById("semail")
// var singupPassword = document.getElementById("spassword")
// var sing_up_button = document.getElementById("singupButton")
// sing_up_button.addEventListener("click", singUp)
// // user singup;
// function singUp() {
//   createUserWithEmailAndPassword(auth, singupEmail.value, singupPassword.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);

//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);

//     });
// }
// // logout funtion & button;
// var logoutbtn = document.getElementById("logout")
// logoutbtn.addEventListener("click", logout)
// function logout() {
//   const auth = getAuth();
//   signOut(auth).then(() => {
//     console.log("user logout");

//   }).catch((error) => {
//     console.log(errorMessage);

//   });
// }
// // user login;
// var loginEmail = document.getElementById("lemail")
// var loginPassword = document.getElementById("lpassword")
// var loginButton = document.getElementById("loginButton")
// loginButton.addEventListener("click", login)
// function login() {
//   signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("User login Sucessful");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Login error", errorMessage);

//     });
// }
// // google login;
// var googlebtn = document.getElementById("googlebtn")
// googlebtn.addEventListener("click", googleLogin)
// function googleLogin() {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//     }).catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.customData.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//     });
// }
// const provider = new GoogleAuthProvider()

// // Otp VErification;
// var recaptchContainer = document.getElementById("recaptcha-container")
// var optbtn = document.getElementById("otpPhonenumber")
// optbtn.addEventListener("click", otpVerifier)

// function otpVerifier() {
//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(auth, recaptchContainer, {
//       'size': 'normal',
//       'callback': (response) => {
//         console.log("Recaptcha Solved !");
//       },
//       'expired-callback': () => {
//         console.log("Recaptcha cantainer nahi mila !");

//       }
//     });
//   }

//   var appVerifier = window.recaptchaVerifier;
//   var phoneNumber_1 = document.getElementById("Phonenumber")
//   phoneNumber_1 = getPhoneNumberFromUserInput();
//   function getPhoneNumberFromUserInput() {
//     signInWithPhoneNumber(auth, phoneNumber_1.value, appVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         alert("OTP has been send !")
//       }).catch((error) => {
//         console.log("Error=>", errorMessage);
//       });
//   }
// }
// var otpbtn = document.getElementById("verifybtn");
// var otpInput = document.getElementById("otpinput");
// otpbtn.addEventListener("click", function () {
//   var codeValue = otpInput.value.trim();
//   if (!window.confirmationResult) {
//     alert("Bahi pahala OTP doo!")
//   }
//   else {
//     console.error("Error: HTML mein button ki ID 'verifybtn' nahi mili!");
//   }
//   window.confirmationResult.confirm(codeValue)
//     .then((result) => {
//       const user = result.user;
//       console.log("user login", user);
//       alert("Login Successful.");
//     }).catch((error) => {
//       console.log(error.Message);
//       alert("Ghalat OTP dala hai aapne!");
//     });
// })
// // SingUP & Login System Complete;
// // Navbar Singup & Login button Change Content Start;
// var butt_1 = document.getElementById("Lbtn");
// var butt_2 = document.getElementById("Sbtn");
// butt_1.addEventListener("click", function () {
//   showButt("loginbox");
// });
// butt_2.addEventListener("click", function () {
//   showButt("singupbox");
// });
// function showButt(tabId) {
//   var tabContent = document.getElementsByClassName("Content");
//   var target = document.getElementById(tabId);
//   if (target.style.display === "block") {
//     target.style.display = "none";
//   } else {
//     for (var i = 0; i < tabContent.length; i++) {
//       tabContent[i].style.display = "none";
//     }
//     var tabId = document.getElementById(tabId);
//     tabId.style.display = "block"
//   }
// }
// Navbar Singup & Login button Change Content Complete;
