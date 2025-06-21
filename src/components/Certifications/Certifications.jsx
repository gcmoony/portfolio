import "./styles.css"
export default function Certifications() {
  const certs = [
    {
      name: "Linux Essentials",
      institute: "Linux Professional Institute",
      cred_link: "https://lpi.org/v/LPI000598272/ubc36knsgn",
      image: "./img/certs/lpi-logo.png",
    },
    {
      name: "Security+",
      institute: "CompTIA",
      cred_link:
        "https://www.credly.com/badges/a7cf8875-cd1c-4fd7-8b0a-28e77a9d1228/public_url",
      image: "./img/certs/security-logo.png",
    },
    {
      name: "A+",
      institute: "CompTIA",
      cred_link:
        "https://www.credly.com/badges/1250bfa3-a3fc-4a8a-b2d3-22badef91492/public_url",
      image: "./img/certs/a-logo.png",
    },
    {
      name: "ITIL 4 Foundations",
      institute: "Axelos",
      cred_link:
        "https://www.credly.com/badges/fe8b2739-bf7a-485b-ad5a-76478a7a2b1a/public_url",
      image: "./img/certs/itil4-logo.png",
    },
  ]
  return (
    <div
      id='Certifications'
      className='certifications'
    >
      <h2>Certifications</h2>
      <p>
        Along my career path, I've studied different topics in technology and
        IT. Check out some of the certificates I've earned.
      </p>
      <div className='container'>
        {certs.map((cert, index) => {
          return (
            <div
              className='card'
              key={index}
            >
              <img
                src={cert.image}
                alt={`${cert.name} icon`}
              />
              <h3>
                {cert.name}
                <br />
              </h3>
              <p>
                <em>{cert.institute}</em>
              </p>
              <a
                target='_blank'
                rel='noreferrer'
                aria-label={`Verify the ${cert.name} certification`}
                href={cert.cred_link}
              ></a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
