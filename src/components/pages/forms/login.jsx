import "./index.css";

const LoginForm = () => {
    return(
       <section className="formbody">
         <div className="container">
      <p className="header">Login Form</p>
      <form action="#" className="form">
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" required />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter email address" required />
        </div>

        <button>Login</button>
        <div className="help-btn">
          <div className="signupref">
            <p>Don't have an account?</p>
            <a href="/registration">Create account</a>
          </div>
          <div className="forget">
            <p>
                Didn't remember your password?
            </p>
            <a href="/forget">Forget Password?</a>
          </div>
        </div>
      </form>
    </div>
       </section>
    )
}

export default LoginForm;