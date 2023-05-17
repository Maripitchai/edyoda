import React, { useState } from "react";
import { BodyWrapper, NavWrapper } from "./style";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Timeclock from "./Timeclock";

export default function Index() {
  const [payment, setpayment] = useState([
    {
      planId: 1,
      duration: 12,
      price:99,
      monthprice:8,
      plan: "12 month plan",
      monthlyPrice: 8,
      isSelected: false,
      isDisable: true,
      expired: true,
      isRecommened: false,
      hashTag: true,
    },
    {
      planId: 2,
      duration: 12,
      price:179,
      monthprice:15,
      plan: "12 month plan",
      monthlyPrice: 15,
      isSelected: true,
      isDisable: false,
      expired: false,
      isRecommened: true,
      hashTag: true,
    },
    {
      planId: 3,
      duration: 6,
      price:149,
      monthprice:25,
      plan: "6 month plan",
      monthlyPrice: 25,
      isSelected: false,
      isDisable: false,
      expired: false,
      hashTag: false,
    },
    {
      planId: 4,
      duration: 3,
      price:99,
      monthprice:33,
      plan: "3 month plan",
      monthlyPrice: 33,
      isSelected: false,
      isDisable: false,
      expired: false,
      hashTag: false,
    },
  ]);
  const changefunction = (clickedplan) => {
    const clickedid = payment.findIndex(plan=>clickedplan == plan.planId);
    // for disabled 
    if(clickedplan.isDisable)
    return;

    if (typeof clickedid == "number") {
      const changedPlanId = payment.map((ele) => {
        if (ele.planId === clickedplan.planId) {
          ele.isSelected = true;
        } else {
          ele.isSelected = false;
        }
        return ele
      });

      setpayment([...changedPlanId]);
    }

    // find array index of clicked clickplanid check a clickplan and planid change fined clickplanid isselected .
  };
  return (
    <div>
      <NavWrapper className="navbar-wrapper">
        <div id="navbar">
          <div className="nav-left">
            <img src="./LOGO.png" alt="" />
            <select name="Courses" placeholder="Courses" value="1" id="">
              <option value="1">Courses</option>
              <option value="1">React js</option>
              <option value="1">Java script</option>
              <option value="1">HTml</option>
            </select>
            <select name="Courses" placeholder="Courses" value="1" id="">
              <option value="1">Programs</option>
              <option value="1">React js</option>
              <option value="1">Java script</option>
              <option value="1">HTml</option>
            </select>
          </div>

          <div className="nav-right">
            <SearchIcon></SearchIcon>
            <p>Log in</p>
            <button>JOIN NOW</button>
          </div>
          <div></div>
        </div>
      </NavWrapper>

      <section id="content">
        <article>
          <div className="text-bar">
            <p>
              Access curated courses worth ₹{" "}
              <span className="underline">18,500</span> at just{" "}
              <span className="clr-bar">₹ 99</span> per year!
            </p>
            {/* <p>₹ 18,500</p><p>at just</p><p className="clr">₹ 99</p><p>per year!</p> */}
            <table cellSpacing={50} cellPadding={20}>
              <tr>
                <td>
                  <img src="./icon1.png" alt="" />
                </td>
                <td>
                  <span>100+</span> Job relevant courses{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <img src="./icon2.png" alt="" />
                </td>
                <td>
                  <span>20,000+</span> Hours of content
                </td>
              </tr>
              <tr>
                <td>
                  <img src="./icon3.png" alt="" />
                </td>
                <td>
                  <span>Exclusive</span> webinar access
                </td>
              </tr>
              <tr>
                <td>
                  <img src="./icon4.png" alt="" />
                </td>
                <td>
                  Scholarship worth <span>₹94,500</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="./icon5.png" alt="" />
                </td>
                <td>
                  <span>Ad Free</span> learning experience
                </td>
              </tr>
            </table>
          </div>
          <div id="payment-container" className="img-bar">
            <div className="container">
              <nav className="row  classnamw2">
                <div className="numbar">
                  <div className="num">1</div>
                  <div className="textbar">Sign Up</div>
                </div>
                <div className="numbar">
                  <div className="num">2</div>
                  <div className="textbar">Subscribe</div>
                </div>
              </nav>
              <title className="row">
                <h3>Select your subcription plan</h3>
              </title>

              <section className="container">
                {payment.map((plan) => {
                  return (
                    <div
                      className={`row box plan-box ${
                        plan.isDisable ? "pg-lightgray" : ""
                      } ${plan.isDisable ? "text-disabled" : ""} 
                      ${plan.expired ? "tag" : ""}
                      ${plan.isSelected ? "pg-lightgreen" : ""}
                      
                      ${plan.hashTag ? "tag" : ""}`}
                      onClick={() => changefunction(plan)}
                    >
                      {plan.hashTag && (
                        <div
                          className={`tag ${plan.isRecommened && "crt-bar"}`}
                        >
                          {plan.expired ? "Offer expired" : "Recommeded"}
                        </div>
                      )}
                      {plan.isSelected ? (
                        <CheckCircleIcon className="check-icon"></CheckCircleIcon>
                      ) : (
                        <Radio
                          defaultChecked={plan.isSelected}
                          checked={plan.isSelected}
                        ></Radio>
                      )}

                      <h5> {plan.duration}months subcription</h5>
                      <div className="price-box">
                        <div>
                          Total <strong>₹{plan.price}</strong>
                        </div>
                        <div>
                          ₹{plan.monthprice}<small>/mo</small>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                <div className="divider">
                  <hr />
                </div>
                <div className="row box ">
                  <h5>Subcripition fee</h5>
                  <div className="price-box">
                    <strong>₹18,500</strong>
                  </div>
                </div>
                <div className=" box plan-box col offer-box content-bar">
                  <div className="row w-100 ">
                    <h5> Limited time offer </h5>
                    <div className="ml-auto">- ₹18,401</div>
                  </div>

                  <small className="price-box row bar logo-bar">
                    {/* <img src="./Vector.svg" alt="" /> */}
                    <Timeclock className="time-box"></Timeclock>
                    
                    <span>Offer valid till 25th March 2023</span>
                  </small>
                </div>
                <div className="row box ">
                  <h5>Total (Incl. of 18% GST)</h5>
                  <div className="price-box">
                    <strong>₹149</strong>
                  </div>
                </div>
                <div className="row box btn-content">
                  <div className="button-box">
                  <Button variant="outlined" color="error">
                    Cancel
                  </Button>
                  </div>
                 <div className="button-bar"> <Button variant="contained" color="success">
                    PROCEED TO PAY
                  </Button></div>
                </div>
                <div className="row box icon">
                  <img src="./Razorpay Icon.png" alt="" />
                </div>
              </section>
              <hr />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
