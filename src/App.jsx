import './App.css'
import Navbar from "./components/Navbar";
import githubLogo from "./assets/github-logo.png"
import linkedInLogo from "./assets/linkedIn-logo.png"
import cssLogo from "./assets/skill-icons/css-icon.png"


function App() {
  return (
    <div className="main-content">
      <Navbar />
      <div id="home" className="section">
        <div className="section-content">
          <p className='brand-2'>DKG Development</p>
          <h1>Transforming Ideas into <span className='brand'>Responsive Web Experiences</span></h1>
          <h5>Hi! I'm <span className="name">Louis McHugh</span>, an aspiring Front End Developer based in the Netherlands with a passion for code.</h5>
          <button  className="btn"
      onClick={() => {
        const workSection = document.getElementById("work");
        workSection.scrollIntoView({ behavior: "smooth" });
      }}>Here is some of my work</button>
        </div>
      </div>

      <div id="about" className="section">
        <div className="section-content">
          <h1>About Section</h1>
          <h2>Skills</h2>
          <div>

          </div>
        </div>
      </div>

      <div id="work" className="section">
        <div className="section-content">
          <h1>Work Section</h1>
        </div>
      </div>

      <div id="contact" className="section">
        <div className="section-content">
          <h1>Contact Section</h1>
          <div className="socialMedia-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='social-link'>
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className='social-link'>
            <img src={linkedInLogo} alt="" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className='social-link'>
            <img src={cssLogo} alt="" />
          </a>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
