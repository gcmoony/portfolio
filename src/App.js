import "./App.css";
import Navigation from "./components/Navigation";
import ContactButton from "./components/ContactButton";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, far, fas);

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="Home" className="section">
        <div className="left">
          <img src="me.jpg" className="profile-pic" alt="George" />
        </div>
        <div className="right">
          <h1>Hey There, I'm George 👋</h1>
          <p>
            I'm an IT specialist, with focus in frontend web development.
            I'm experienced in other stuff too. Want to connect?
          </p>
          <ContactButton />
        </div>
      </div>

      <div id="About" className="section">
        <h2>About</h2>
        <p>
          I've got experience with a variety of things. Here's some quick facts:
        </p>
        <ul className="list-plain">
          <li>
            <h3>IT Certified</h3>
            <p>I've been officially certified in a couple of things:</p>
            <ul className="sub list-plain">
              <li>
                <a
                  target="blank"
                  href="https://lpi.org/v/LPI000598272/ubc36knsgn"
                >
                  <img
                    src="https://github.com/gcmoony/gcmoony/assets/47188474/409b4c7a-3c75-4440-898b-ac7cdc51b36f"
                    alt="Linux Essentials Icon"
                    style={{ display: "block" }}
                  />
                  Linux Essentials
                  <br />
                  Linux Professional Institute
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.credly.com/badges/a7cf8875-cd1c-4fd7-8b0a-28e77a9d1228/public_url"
                >
                  <img
                    src="https://github.com/gcmoony/gcmoony/assets/47188474/a69392cc-0fe1-4cc3-8ceb-f93e231961a4"
                    alt="CompTIA Security+ Icon"
                    style={{ display: "block" }}
                  />
                  Security+
                  <br />
                  CompTIA
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.credly.com/badges/1250bfa3-a3fc-4a8a-b2d3-22badef91492/public_url"
                >
                  <img
                    src="https://github.com/gcmoony/gcmoony/assets/47188474/5f3cfe3d-fc19-42d0-af47-5cdd53e54808"
                    alt="CompTIA A+ Icon"
                    style={{ display: "block" }}
                  />
                  A+
                  <br />
                  CompTIA
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.credly.com/badges/fe8b2739-bf7a-485b-ad5a-76478a7a2b1a/public_url"
                >
                  <img
                    src="https://github.com/gcmoony/gcmoony/assets/47188474/f6c3ca18-fe67-46a0-a1ff-ff16145a3dea"
                    alt="ITIL 4 Icon"
                    style={{ display: "block" }}
                  />
                  ITIL 4 Foundations
                  <br />
                  Axelos
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h3>Web Development and Security</h3>
            <p>
              I occasionally build tools or recreate mock components to practice
              web design. I also like to practice testing web application
              vulnerabilities with{" "}
              <a href="https://tryhackme.com/">TryHackMe</a>. Some links to
              check out:
            </p>
            <ul className=" list-plain">
              <li>
                <a
                  target="blank"
                  href="https://www.frontendmentor.io/profile/gcmoony"
                >
                  My Frontend Mentor Profile
                </a>
              </li>
              <li>
                <a target="blank" href="https://gcmoony.com/">
                  GCMoony - Slowly updated with tools
                </a>
              </li>
              <li>
                <a target="blank" href="https://tryhackme.com/p/GCMunoz">
                  My TryHackMe Profile
                </a>
              </li>
              <li>
                <a href="https://github.com/gcmoony">My GitHub Profile</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="Contact" className="section">
        <h2>Contact</h2>
        <p>Want to connect? Here's a few ways to reach out to me:</p>

        <div className="links">
          <a target="blank" href="https://www.linkedin.com/in/gcmunoz">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              style={{ fontSize: "100px" }}
              color="#0a66c2"
            />
            <br />
            LinkedIn
          </a>
          <a href="https://github.com/gcmoony">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              style={{ fontSize: "100px" }}
              color="#fafbfc"
            />
            <br />
            GitHub
          </a>
          <button
            className="email-button"
            onClick={(e) => {
              navigator.clipboard.writeText("george@gcmoony.com");
              e.target.classList.toggle("clicked");
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              color="#c71610"
              style={{ fontSize: "100px" }}
            />
            <br />
            Email Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
