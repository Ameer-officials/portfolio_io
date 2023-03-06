import React from "react";

const ModeWork = () => {
  return (
    <div className="mode-work">
       <video
                onContextMenu={(event) => {
                  event.preventDefault();
                }}
                autoPlay
                preload="true"
                loop
                muted
                id="mode-video"
              >
                <source
                  src="/videos/portfolio_work_mode.mp4"
                  type="video/mp4"
                />
              </video>
      <div className="mode-1 mode">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <div className="mode-2 mode">
        <label className="switch2">
          <input type="checkbox" />
          <span className="slider2">
            <span className="circle"></span>
          </span>
        </label>
      </div>
      <div className="mode-3 mode">
      <button className="btn3">
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" className="icon3">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
      </div>
    </div>
  );
};

export default ModeWork;
