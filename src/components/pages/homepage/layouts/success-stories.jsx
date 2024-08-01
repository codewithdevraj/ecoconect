import userImg from "../../../../assets/icons/icons8-user-64.png";
import leftIcon from "../../../../assets/icons/icons8-left-50.png";

const SuccessStories = () => {
  return (
    <section className="success" id="success">
      <h2>Testimonials: Success Stories</h2>
      <div className="success-wrap">
        <div className="snav" id="snavLeft">
          <img src={leftIcon} alt="Left Arrow" />
        </div>
        <div className="scard-wrap" id="scard-wrap">
          <div className="scard">
            <div className="scard-left">
              <img src={userImg} alt="User" />
            </div>
            <div className="scard-right">
              <p className="quote" id="quoteStart">
                "
              </p>
              <p>
                We’ve successfully launched multiple projects through
                partnerships formed here, significantly advancing our SDG goals.
              </p>
              <p className="quote" id="quoteEnd">
                "
              </p>
              <p className="suser">--User1</p>
            </div>
          </div>
        </div>
        <div className="snav" id="snavRight">
          <img src={leftIcon} alt="Right Arrow" />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
