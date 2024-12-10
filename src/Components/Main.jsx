import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../assets/assets";
import { Context } from "./Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>

        {!showResult ? (
          <>
            <div className="main-container">
              <div className="hero-text">
                <span>Hello, Aman.</span>
                <p>How can I help you today?</p>
              </div>
              <div className="card-container">
                <div className="card">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              name=""
              id=""
              placeholder="Enter Prompt"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
