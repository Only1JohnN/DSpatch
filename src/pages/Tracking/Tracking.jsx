import { useState } from "react";
import { Button } from "../../components";
import "./styles.css";
// import TrackingAction from "./TrackingAction";

const Tracking = () => {
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const trackingNumberHandler = () => {
    if (!display) {
      setDisplay(false);
    } else {
      setDisplay(false);
    }
  };
  const deliveryProofHandler = () => {
    if (!display) {
      setDisplay(true);
    }
  };
  const viewProofHandler = () => {
    if (!display2) {
      setDisplay2(false);
    } else {
      setDisplay2(false);
    }
  };
  const billOfLadingHandler = () => {
    if (!display2) {
      setDisplay2(true);
    }
  };

  return (
    <div>
      <div className='tr-hero'>
        <div className='tr-hero-title'>
          <h1>Tracking</h1>
          <p>
            Our tracking tools let you keep informed and in control of your shipments, allowing you
            to ship with confidence.
          </p>
        </div>
      </div>

      {/*Tracking action section starts  */}
      <div className='container'>
        <div className='tr-action__title text-center'>
          <h3>Track your package the way you want</h3>
          <p>
            Do you need the status of your package or evidence of delivery? Enter your tracking
            number here.
          </p>
        </div>
        <div className='text-center mb-5'>
          <Button
            onClick={trackingNumberHandler}
            className={!display ? "me-1 btn-active" : "me-1 btn-inactive"}
          >
            Tracking Number
          </Button>
          <Button
            onClick={deliveryProofHandler}
            className={display ? "me-1 btn-active" : "me-1 btn-inactive"}
          >
            Obtain Proof of Delivery
          </Button>
          <p className={display ? "display text-center mt-5" : "no-display"}>
            View your proof of delivery, including an image of the recipient’s <br /> signature for
            DSpatch shipments. You can also get a copy of <br /> your DSpatch bill of lading.
          </p>
        </div>
        <div
          className={
            display ? "display text-center d-flex justify-content-center gx-5" : "no-display"
          }
        >
          <p
            onClick={viewProofHandler}
            className={!display2 ? "me-5 proof-active" : "me-5 proof-inactive"}
          >
            View Proof of Delivery
          </p>
          <p
            onClick={billOfLadingHandler}
            className={display2 ? "me-5 proof-active" : "me-5 proof-inactive"}
          >
            View Bill of Lading
          </p>
        </div>
        <div id={!display2 && display ? "active-indicator" : ""}></div>
        <div id={display2 && display ? "active-indicator2" : ""}></div>
        <div id={display ? "hr" : ""}></div>
        <div
          className={display2 && display ? "no-display text-center" : "display text-center mt-5"}
        >
          <p>
            Enter up to 10 of your DSpatch tracking, order numbers here <br /> (one per line).
          </p>
          <div>
            <form>
              <input type='text' placeholder='TRACKING NUMBER' />
            </form>
            <p id='help-action'>
              <a href='#'>Need help?</a>
            </p>
            <Button className='track-btn'>Track</Button>
          </div>
        </div>
        {display2 && (
          <div className={display ? "display text-center mt-5" : "no-display text-center"}>
            <p id='accessbill-action'>
              <a href='#'>
                <u>LOGIN TO ACCESS BILL OF LADING</u>
              </a>
            </p>
          </div>
        )}
      </div>
      {/* Tracking action ends */}

      <div className='tr-benefit container mt-5 '>
        <div className='hr mb-5'></div>
        <h1 className='text-center'>Tracking Benefits</h1>
        <div className='row gx-5'>
          <div className='col tr-benefit__text'>
            <h3>Dspatch Tracking</h3>
            <p>
              DSpatch Tracking, the feature at the top of the website, provides shipment updates
              with a single click. A tool designed for speed, simplicity, and ease of use. You may
              save your shipments directly to our site, eliminating the need to check in to find out
              where your items are.
            </p>
          </div>
          <div className='col tr-benefit__list'>
            <h3>Key Benefits</h3>
            <p>||| Without logging in, you can track in near real time.</p>
            <p>||| Get an update on the homepage with a single click.</p>
            <p>||| Save your shipments for near-real-time updates.</p>
            <p>||| View all of your shipments on a single, simple interface.</p>
            <p>||| Make nicknames for our most basic search experience.</p>
          </div>
        </div>

        <div className='row gx-5'>
          <div className='hr mb-5 mt-5'></div>
          <div className='col tr-benefit__text'>
            <h3>Dspatch Mobile Tracking</h3>
            <p>
              DSpatch Tracking for Mobile is our most handy tracking solution, providing updates
              while you're on the move so you can remain on top of your shipments 24 hours a day, 7
              days a week(24/7), from any location. It puts all of DSpatch Tracking's power in the
              palm of your hand.
            </p>
          </div>
          <div className='col tr-benefit__list'>
            <h3>Key Benefits</h3>
            <p>||| Track from any location at any time.</p>
            <p>||| With a single tap, you can track your package.</p>
            <p>||| Save your shipments for near-real-time updates.</p>
            <p>||| Set up automatic notifications to stay informed.</p>
            <p>||| Tracking is made simple using barcode scanning.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
