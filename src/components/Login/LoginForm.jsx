import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { auth } from "../../utils/firebase";

const LoginForm = () => {
  const email = useRef(null);
  const password = useRef(null);

  const handleLoginSubmit = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value,
    )
      .then((userCredential) => {})
      .catch((error) => {});
  };

  return (
    <form onSubmit={handleLoginSubmit} className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input ref={email} type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input ref={password} type="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
