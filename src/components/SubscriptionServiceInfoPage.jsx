import ResultPage from "../pages/ResultPage";
import "./SubscriptionServiceInfoPage.css";
import { useState } from "react";
import NavigationBar from "./navigationBar";
export default function SubscriptionServiceInfoPage() {
  return (
    <>
      <NavigationBar />
      <div className="back-img">
        <div className="back">
          <div className="box">
            <h1>Unlock the Power of Externship Reviews</h1>
            <h2>
              Subscribe to Rate My Externship and get access to valuable
              externship insights
            </h2>
            <button>SUBSCRIBE</button>
            <h3>Why Subscribe?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              doloribus. Maiores repellat consectetur earum temporibus numquam
              quia amet id atque quam porro consequuntur obcaecati dolore ab
              vero excepturi aperiam dignissimos harum, quaerat assumenda rem
              impedit. Perspiciatis laudantium, neque ipsa eveniet, optio aut
              reprehenderit quos voluptatibus vel nisi maxime blanditiis ratione
              consectetur, architecto id illum quasi dignissimos. Sit, dolor.
              Iusto, molestias quasi voluptatibus placeat repudiandae quod
              aliquid voluptates illo rerum odit.
            </p>
            <div className="header">
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
