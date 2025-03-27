import React from "react";

function Home() {
  return (
    <div className="text-center">
      <center>
      <h1>Welcome to Clarify Doubts</h1>
      <p>Connect with professors and clear your doubts.</p>
      <button class name="btn btn-success" onClick={() => window.location.href = "/login"}><strong>Get Started</strong></button>
      </center>
    </div>
  );
}

export default Home;
