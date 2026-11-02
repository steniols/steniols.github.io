import { AiOutlineGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import photo from './photo.png';
import './App.css';

const links = [
  { href: 'https://gist.github.com/steniols/', label: 'GitHub', Icon: AiOutlineGithub },
  { href: 'https://www.linkedin.com/in/stenio-leopoldo-de-souza-2b635199/', label: 'LinkedIn', Icon: AiFillLinkedin },
  { href: 'https://www.instagram.com/steniols/', label: 'Instagram', Icon: AiFillInstagram },
];

function App() {
  return (
    <div className="App">
      <div className="App-glow" aria-hidden="true" />
      <main className="App-card">
        <div className="App-avatar">
          <img src={photo} alt="Stenio Leopoldo de Souza" />
        </div>
        <h1 className="App-name">Stenio Leopoldo de Souza</h1>
        <p className="App-handle">@steniols</p>
        <nav className="App-links">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              className="App-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          ))}
        </nav>
      </main>
    </div>
  );
}

export default App;
