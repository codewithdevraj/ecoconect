import "./index.css";

const OtpGen = () => {
    return(
       <section className="formbody">
         <div class="container">
      <p className="header">Reset Form</p>
      <form class="form">
        <div class="input-box">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" required />
        </div>
        <div class="input-box">
          <label>Input Otp</label>
          <input type="text" placeholder="Enter Otp" required />
        </div>
        <button>Validate Otp</button>
      </form>
    </div>
       </section>
    );
};

export default OtpGen;