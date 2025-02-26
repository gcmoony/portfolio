import "./styles.css"

export default function Navigation() {
  return (
    <div className='Nav-Bar'>
      <h1 className='Nav-Logo'>GCMunoz</h1>

      <ul className='Nav-Links'>
        <li>
          <a href='#Home'>Home</a>
        </li>
        <li>
          <a href='#About'>About</a>
        </li>
        <li>
          <a href='#Contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}
