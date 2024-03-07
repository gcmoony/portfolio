import "./styles.css";

export default function Navigation() {
  return (
    <div className="Nav-Bar">
      <div className="Nav-Logo">GCMunoz</div>

      <ul className="Nav-Links">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
