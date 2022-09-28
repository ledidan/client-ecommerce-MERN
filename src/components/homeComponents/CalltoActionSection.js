import React from "react";

export default function CalltoActionSection() {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div class="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Do you need more tips</h2>
              <p>Sign up free and get the lastest tips.</p>
              <div className="from-section">
                <input type="email" placeholder="Your email...." name="email" />
                <input type="submit" value="Yes, I want!" name="subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
