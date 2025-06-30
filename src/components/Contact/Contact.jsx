import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.css"
library.add(fab, far, fas)

export default function Contact() {
  const contactInfo = [
    {
      name: "LinkedIn",
      icon: ["fab", "linkedin"],
      contact_link: "https://www.linkedin.com/in/gcmunoz",
    },
    {
      name: "GitHub",
      icon: ["fab", "github"],
      contact_link: "https://github.com/gcmoony",
    },
  ]
  return (
    <div
      id='Contact'
      className='contact'
    >
      <h2>Contact</h2>
      <p>Want to learn more? Reach out to me through my socials!</p>
      <div className='container'>
        {contactInfo.map((info, index) => {
          return (
            <div
              className='card'
              key={index}
            >
              <FontAwesomeIcon
                className='fai'
                icon={info.icon}
                style={{
                  fontSize: "5em",
                  background: "#f2f2f2",
                  borderRadius: "10px",
                  padding: ".125em",
                  aspectRatio: "1 / 1",
                }}
                color='#111'
              />
              <h3>{info.name}</h3>
              <a
                target='_blank'
                href={info.contact_link}
                rel='noreferrer'
                style={{ color: "transparent" }}
              >
                {info.name}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
