export default function Contact() {
  return (
    <div
      id='Contact'
      className='section'
    >
      <h2>Contact</h2>
      <p>Want to connect? Here's a few ways to reach out to me:</p>

      <div className='links'>
        <a
          target='blank'
          href='https://www.linkedin.com/in/gcmunoz'
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            style={{ fontSize: "100px" }}
            color='#0a66c2'
          />
          <br />
          LinkedIn
        </a>
        <a href='https://github.com/gcmoony'>
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{ fontSize: "100px" }}
            color='#fafbfc'
          />
          <br />
          GitHub
        </a>
        <button
          className='email-button'
          onClick={(e) => {
            navigator.clipboard.writeText("george@gcmoony.com")
            e.target.classList.toggle("clicked")
          }}
        >
          <FontAwesomeIcon
            icon={["fas", "envelope"]}
            color='#c71610'
            style={{ fontSize: "100px" }}
          />
          <br />
          Email Me
        </button>
      </div>
    </div>
  )
}
