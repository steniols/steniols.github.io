import { AiOutlineGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import ReactRoundedImage from "react-rounded-image";
import { IconContext } from "react-icons";
import photo from './photo.png';
import './App.css';

function App() {

  // const photo = require("./photo.jpg");

  return (
    <div className="App">
      <header className="App-header">
        <ReactRoundedImage 
          image={photo} 
          roundedColor="#009966"
          imageWidth="180"
          imageHeight="180"
          roundedSize="4"
          borderRadius="180"/>
        <p>
         Stenio Leopoldo de Souza
        </p>
        <div class="App-links">
          <a
            className="App-link"
            href="https://gist.github.com/steniols/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
            <>
              <AiOutlineGithub />
            </>
          </IconContext.Provider> 
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/stenio-leopoldo-de-souza-2b635199/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
            <>
              <AiFillLinkedin />
            </>
          </IconContext.Provider>
          </a>
          <a
            className="App-link"
            href="https://www.instagram.com/steniols/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
          <>
              <AiFillInstagram />
            </>
            </IconContext.Provider>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
