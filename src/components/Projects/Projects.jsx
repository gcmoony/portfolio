import "./styles.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(fab, fas)

export default function Projects() {
  const projectData = [
    {
      title: "Castle Crashers Creator",
      description: `An interactive character customizing experience based on the 2008 game Castle Crashers. Allows a user to build a party of characters, including the ability to  choose specific types of roles and weapon types.`,
      project_tags: [
        "React",
        "React Router",
        "Supabase",
        "Tailwind",
        "Netlify Functions",
      ],
      project_repo: null,
      project_live_link: "https://ccc-gcm.netlify.app/",
      img_link: "./img/project_previews/Castle-Crashers-Creator-demo.gif",
    },
    {
      title: "Artic View",
      description: `A dashboard to view some information provided by the  Art Institute of Chicago API, including statistics about the type of artworks available. Browse available artworks through the dashboard, which provides you the ability to search for pieces that are for public domain, date of creation, and some title keywords.`,
      project_tags: ["React", "React Router", "JavaScript", "CSS", "MUI"],
      project_repo: null,
      project_live_link: "https://artic-dashboard-gcm.netlify.app/",
      img_link: "./img/project_previews/art-gallery-dashboard-demo.gif",
    },
    {
      title: "Paper Exchange",
      description: `A web app to help you identify current exchange rates for the different types of currencies in the world. Provides simple insights such as the strength of a currency to other currencies, a list of stronger and weaker currencies, as well as a conversion tool. Uses the Exchange API.`,
      project_tags: ["React", "API", "CSS", "MUI"],
      project_repo: null,
      project_live_link: "https://paper-exchange.netlify.app/",
      img_link: "./img/project_previews/paper-exchange-demo.gif",
    },
    {
      title: "What's For Dinner?",
      description: `A frontend application to help you find a new recipe. It provides you the ability to find a new recipe to try while also allowing you to filter out attributes of a recipe you're not quite interested in.`,
      project_tags: ["React", "JavaScript", "Vite", "CSS"],
      project_repo: null,
      project_live_link: "https://whats4dinner-gcm.netlify.app/",
      img_link: "./img/project_previews/whats-4-dinner-demo.gif",
    },
    {
      title: "Konnichiwa, Nihongo",
      description: `An easy interactive way to study (Japanese language) flash cards. The app showcases two sets of flashcards and a gamified approach to studying by letting you submit an answer and receive a point for correctness.`,
      project_tags: ["React", "JavaScript", "CSS"],
      project_repo: null,
      project_live_link: "https://japanese-flash-cards-gcm.netlify.app/",
      img_link: "./img/project_previews/japanese-flash-cards-demo.gif",
    },
    {
      title: "CookBook",
      description: `A digital recipe book to store your written recipes. I often found myself taking screenshots of recipes or constantly referring to a video when I wanted to remake a recipe I enjoyed. In this format, I can add and modify recipes as necessary, giving me the freedom to take some creative variation and easily save the changes I like.`,
      project_tags: ["MongoDB", "React", "JavaScript", "Express", "Vite"],
      project_repo: "https://github.com/gcmoony/cookbook",
      project_live_link: null,
      img_link: "./img/project_previews/cookbook-demo.gif",
    },
    {
      title: "FileViewer",
      description: `A desktop file-reading application. Currently used to preview
 markdown files on the desktop without uploading files online or using a parser in a code editor. It provides the ability to quick-switch
 between recently opened files in the current session. Uses Marked for markdown parsing and DOMPurify for HTML sanitizing.`,
      project_tags: ["Electron JS", "React", "JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/fileviewer",
      project_live_link: null,
      img_link: "./img/project_previews/filereader_screen.gif",
    },
    {
      title: "Dog Breed Classifier",
      description:
        "A supervised machine learning model trained on identifying a dog's breed in a given image. Training data and outputs are limited to chihuahuas, rottweilers, and golden retrievers.",
      project_tags: ["Python", "Jupyter Notebook", "sci-kit learn"],
      project_repo: "https://github.com/GCadel/dog_breed_classification",
      project_live_link: null,
      img_link: "./img/project_previews/dog_classifier_screen.png",
    },
    {
      title: "Art Gallery",
      description: `An online art browsing gallery using the Art Institute of Chicago REST API to showcase available public artwork and tours.`,
      project_tags: ["JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/art-gallery",
      project_live_link: "https://gcmoony.github.io/art-gallery/",
      img_link: "./img/project_previews/art_gallery_screen.png",
    },
    {
      title: "ほろよい - 90's Styled Web Design",
      description: `A 90's inspired website submitted for the Codedex 2024 Holiday Hackathon. This website is based on the drinks found at Suntory Horoyoi Drinks and was designed to replicate the playfulness and responsiveness (or lack there-of) of older websites.`,
      project_tags: ["JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/90s-website",
      project_live_link: "https://gcmoony.github.io/90s-website/",
      img_link: "./img/project_previews/90s_website_screen.png",
    },
    {
      title: "Markdown Previewer",
      description: `An online text editor to practice writing markdown, paired with a live preview window to view the markdown in its final state. Uses Marked for markdown parsing, DOMPurify for HTML sanitizing, and highlight.js for code syntax highlighting.`,
      project_tags: ["React", "JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/react-markdown-preview",
      project_live_link: "https://gcmoony-reactmd.netlify.app/",
      img_link: "./img/project_previews/mk_preview_screen.png",
    },
    {
      title: "Calculator App",
      description: `A Frontend Mentor challenge submission of the Calculator App Project. The calculator has basic functions such as performing addition, subtraction, division, and multiplication. Additionally, there are three different color themes a user can choose from to style the calculator.`,
      project_tags: ["JavaScript", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/js-calculator",
      project_live_link: "https://gcmoony.github.io/js-calculator/",
      img_link: "./img/project_previews/js_calculator_screen.png",
    },
    {
      title: "To Do List",
      description:
        "An online checklist application to help you track and mark the tasks you must complete. Supports CRUD operations such as adding new tasks, modifying tasks, viewing created tasks, and deleting tasks. Utilizes the browser's local storage to maintain the checklist on the user's device for data persistence.",
      project_tags: ["JavaScript", "Tailwind CSS", "HTML / CSS"],
      project_repo: "https://github.com/gcmoony/SimpleCrud",
      project_live_link: "https://gcmoony.github.io/SimpleCrud/",
      img_link: "./img/project_previews/todo_screen.png",
    },
  ]

  return (
    <div
      className='projects'
      id='Projects'
    >
      <h2>Projects</h2>
      <p>Take a look at some of my projects hosted on GitHub.</p>
      <div className='container'>
        {projectData.map((project, index) => {
          return (
            // The project cards
            <div
              className='card'
              key={index}
            >
              <img
                src={project.img_link}
                alt={`${project.title} preview`}
              />
              <div className='desc'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  {project.project_repo ? (
                    <a
                      rel='noreferrer'
                      target='_blank'
                      href={project.project_repo}
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                      <span> GitHub</span>
                    </a>
                  ) : (
                    ""
                  )}

                  <span> </span>
                  {project.project_live_link && (
                    <a
                      rel='noreferrer'
                      target='_blank'
                      href={project.project_live_link}
                    >
                      <FontAwesomeIcon icon={["fas", "globe"]} />
                      <span> Live Demo</span>
                    </a>
                  )}
                </div>
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
