//  import Card from '../Card/Card'

 const certs = [
  {
    title: "ITIL 4 Foundation",
    link: "https://www.credly.com/badges/fe8b2739-bf7a-485b-ad5a-76478a7a2b1a"
  },
  {
    title: "CompTIA Security+",
    link: "https://www.credly.com/badges/a7cf8875-cd1c-4fd7-8b0a-28e77a9d1228"
  },
  {
    title: "CompTIA A+",
    link: "https://www.credly.com/badges/1250bfa3-a3fc-4a8a-b2d3-22badef91492"
  },
  {
    title: "fCC Responsive Web Design",
    link: "https://www.freecodecamp.org/certification/gcmoony/responsive-web-design"
  },
  {
    title: "fCC JavaScript Algorithms and Data Structures",
    link: "https://www.freecodecamp.org/certification/gcmoony/javascript-algorithms-and-data-structures"
  },
 ]

//  const certs = [
//   "CompTIA Security+",
//   "CompTIA A+",
//   "FCC JavaScript Algorithms and Data Structures"
// ]

export default function CardHolder({style}) {
  return (
    <div className={style}>
      {certs.map((cert, key) => {
        return <a key={key} target="_blank" className="block rounded p-3 bg-slate-300 hover:bg-blue-300" href={cert.link} >{cert.title}</a>
      })}
    </div>
  );
}