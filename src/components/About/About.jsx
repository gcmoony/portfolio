import ContactButton from "../ContactButton/ContactButton";
import "./styles.css";
import ProfilePic from "/me.jpg";

export default function About() {
  return (
    <div
      id='About'
      className='About'
    >
      <div className='left'>
        <img
          src={ProfilePic}
          className='profile-pic'
          alt='George'
        />
      </div>
      <div className='right'>
        <h2>George Cadel-Munoz</h2>
        <p>
          <em>BS Computer Science Graduate</em>
        </p>
        <p>
          I am a software developer. I like to work on all kinds of things such
          as websites, desktop applications, and even robots! Want to learn
          more?
        </p>
        <br />
        <ContactButton />
      </div>
    </div>
  );
}
