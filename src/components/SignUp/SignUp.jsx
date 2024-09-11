import React, { useState, useRef } from "react";
import { checkValidData } from "../../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const formDataRef = useRef({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    formDataRef.current[name] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(
      formDataRef.current.email,
      formDataRef.current.password,
    );
    setErrorMessage(message);
    createUserWithEmailAndPassword(
      auth,
      formDataRef.current.email,
      formDataRef.current.password,
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: formDataRef.current.username,
        }).then(() => {
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName }));
        });
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Sign up</h2>
      {[
        {
          name: "username",
          icon: "fas fa-user",
          type: "text",
          placeholder: "Username",
        },
        {
          name: "email",
          icon: "fas fa-envelope",
          type: "email",
          placeholder: "Email",
        },
        {
          name: "password",
          icon: "fas fa-lock",
          type: "password",
          placeholder: "Password",
        },
      ].map((input, index) => (
        <div key={index} className="input-field">
          <i className={input.icon}></i>
          <input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            onChange={handleChange}
          />
        </div>
      ))}
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        {[
          { icon: "fab fa-facebook-f" },
          { icon: "fab fa-twitter" },
          { icon: "fab fa-google" },
          { icon: "fab fa-linkedin-in" },
        ].map((social, index) => (
          <a key={index} href="#" className="social-icon">
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </form>
  );
};

export default SignUp;
