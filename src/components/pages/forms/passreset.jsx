import "./index.css";

const ChangePassword = () => {
    return (
        <section className="formbody">
        <div className="container">
      <p className="header">Reset Password</p>
      <form className="form">
        <div className="input-box">
          <label>New Password</label>
          <input type="text" placeholder="Enter your new password" required />
        </div>
        <div className="input-box">
          <label>Confirm Password</label>
          <input type="text" placeholder="Confirm your new password" required />
        </div>
        <button>Change Password</button>
      </form>
    </div>
        </section>
    );
};

export default ChangePassword ;