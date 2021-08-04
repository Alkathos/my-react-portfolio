import React from 'react';

export default function Portfolio() {
  return (
    <div>

      <div className="card">
            <div className="card-image">
              <img src="assets\img\node.PNG" />
              <span className="card-title" style={{backgroundColor: "black"}}>README Generator</span>
            </div>
            <div className="card-content">
              <p style={{color: "black"}}>This is a README generator that helps with creating a READEME file for a developer
              so they can spend more time on developing as opposed to dedicating time on creating one from scratch.</p>
            </div>
            <div className="card-action">
              <a target="_blank" href="https://github.com/Alkathos/README-Generator">GitHub</a>
            </div>
      </div>

      <div className="card">
            <div className="card-image">
              <img src="assets\img\laugh_gen.PNG" />
              <span className="card-title" style={{backgroundColor: "black"}}>Laugh Generator</span>
            </div>

            <div className="card-content">
              <p style={{color: "black"}}>This was a group project created with fellow classmates. We created a a simple
              joke and meme generator that calls on certain APIs to produce images(memes) or jokes.</p>
            </div>

            <div className="card-action">
              <a target="_blank" href="https://github.com/Alkathos/Laugh-Generator">GitHub</a>
              <a target="_blank" href="https://alkathos.github.io/Laugh-Generator/">Git Pages</a>
            </div>
      </div>
  
          <div className="card">
            
            <div className="card-image">
              <img src="assets\img\laugh_gen.PNG" />
              <span className="card-title" style={{backgroundColor: "black"}}>Recipe Cookbook</span>
            </div>

            <div className="card-content">
              <p style={{color: "black"}}>This was a group project created with fellow classmates. We created a a simple
              joke and meme generator that calls on certain APIs to produce images(memes) or jokes.</p>
            </div>

            <div className="card-action">
              <a target="_blank" href="https://github.com/Alkathos/Laugh-Generator">GitHub</a>
              <a target="_blank" href="https://alkathos.github.io/Laugh-Generator/">Git Pages</a>
            </div>

          </div>
           
    </div>
  )
}