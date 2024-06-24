import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

<>
  <link rel="stylesheet" href="css/style.css" />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />



<div className="wrapper">
  <form action="">
    <h1>Login</h1>
    <div className="input-box">
      <input type="text" placeholder="Username" required="" />
      <i className="bx bxs-user" />
    </div>
    <div className="input-box">
      <input type="password" placeholder="Password" required="" />
      <i className="bx bxs-lock-alt" />
    </div>
    <div className="remember-forgot">
      <label>
        <input type="checkbox" />
        Remember Me
      </label>
      <a href="#">Forgot Password</a>
    </div>
    <button type="submit" className="btn">
      Login
    </button>
    <div className="register-link">
      <p>
        Dont have an account? <a href="#">Register</a>
      </p>
    </div>
  </form>
</div>
</>
  );
}
