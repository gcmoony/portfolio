import "./styles.css"
export default function Projects() {
  const projectData = [
    {
      title: "FileViewer",
      description: `A desktop file-reading application. Currently used to preview Markdown files on the desktop without needing to upload files online or use a parser in a code editor. Provides the ability to quick-switch between recently opened files in the current session. Uses ${(
        <a href='https://marked.js.org/'>Marked</a>
      )} for Markdown parsing and ${(
        <a href='https://github.com/cure53/DOMPurify'>DOMPurify</a>
      )} for HTML sanitizing.`,
      project_tags: ["Electron JS", "React", "JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/fileviewer",
      project_live_link: null,
      img_link: "./img/project_previews/filereader_screen.gif",
    },
    {
      title: "Dog Breed Classifier",
      description:
        "A supervised machine learning model trained on identifying the breed of a dog in a given image. Training data and outputs are limited to chihuahuas, rottweilers, and golden retrievers.",
      project_tags: ["Python", "Jupyter Notebook", "sci-kit learn"],
      project_repo: "https://github.com/GCadel/dog_breed_classification",
      project_live_link: null,
      img_link: "./img/project_previews/dog_classifier_screen.png",
    },
    {
      title: "Art Gallery",
      description: `An online art browsing gallery using the ${(
        <a href='https://api.artic.edu/docs/'>Art Institute of Chicago</a>
      )} REST API to showcase available public artwork and tours.`,
      project_tags: ["JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/art-gallery",
      project_live_link: "https://gcmoony.github.io/art-gallery/",
      img_link: "./img/project_previews/art_gallery_screen.png",
    },
    {
      title: "ほろよい - 90's Styled Web Design",
      description: `A 90's inspired website submitted for the ${(
        <a href='https://www.codedex.io/holiday-hackathon'>
          Codedex 2024 Holiday Hackathon
        </a>
      )}. Based off of the drinks found at ${(
        <a href='https://www.suntory.co.jp/rtd/horoyoi/'>
          Suntory Horoyoi Drinks
        </a>
      )}, this is a website designed to replicate the playfulness and responsiveness (or lack there-of) of older websites. ${(
        <em>NOTE: The website plays audio queues during interaction</em>
      )}.`,
      project_tags: ["JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/90s-website",
      project_live_link: "https://gcmoony.github.io/90s-website/",
      img_link: "./img/project_previews/90s_website_screen.png",
    },
    {
      title: "Markdown Previewer",
      description: `An online text editor to practice writing markdown, paired with a live preview window to view the markdown in its final state. Uses ${(
        <a href='https://marked.js.org/'>Marked</a>
      )} for Markdown parsing, ${(
        <a href='https://github.com/cure53/DOMPurify'>DOMPurify</a>
      )} for HTML sanitizing, and ${(
        <a href='https://highlightjs.org/'>highlight.js</a>
      )} for code syntax highlighting.`,
      project_tags: ["React", "JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/react-markdown-preview",
      project_live_link: "https://gcmoony-reactmd.netlify.app/",
      img_link: "./img/project_previews/md_preview_screen.png",
    },
    {
      title: "Calculator App",
      description: `A ${(
        <a href='https://www.frontendmentor.io/?ref=challenge'>
          Frontend Mentor
        </a>
      )} challenge submission of the ${(
        <a href='https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29'>
          Calculator App Project
        </a>
      )}. The calculator has basic functions such as performing addition, subtraction, division, and multiplication. Additionally, there are three different color themes a user can choose from to style the calculator.`,
      project_tags: ["JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/js-calculator",
      project_live_link: "https://gcmoony.github.io/js-calculator/",
      img_link: "./img/project_previews/js_calculator_screen.png",
    },
    {
      title: "To Do List",
      description:
        "An online checklist application to help you track and mark the tasks you need to complete. Supports CRUD operations such as adding new tasks, modifying tasks, viewing created tasks, and deleting tasks. Utilizes the browser's local storage to maintain the checklist on the user's device for data persistence.",
      project_tags: ["JavaScript", "Tailwind CSS", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/SimpleCrud",
      project_live_link: "https://gcmoony.github.io/SimpleCrud/",
      img_link: "./img/project_previews/todo_screen.png",
    },
  ]

  return (
    <div className='projects'>
      <h2>Projects</h2>
      <div className='container'>
        {projectData.map((project, index) => {
          return (
            <div
              className='card'
              key={index}
            >
              <img
                src={project.img_link}
                alt={`${project.title} preview image`}
              />
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.project_tags.map((projTag, tagIndex) => {
                    return <li key={tagIndex}>{projTag}</li>
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
