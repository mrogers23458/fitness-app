import background from "./images/landing_bg.webp";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">Header Content Goes Here</header>
      <div class="heading-content">
        <div class="login-content-container-left">
          <p class="landing-text">"Some small quote will go here"</p>
        </div>
        <div class="login-content-container-right">some content</div>
      </div>
      <img class="main-bg-img" src={background} alt="fitness_background" />
    </div>
  );
}

export default App;
