import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import {CORE_CONCEPTS} from './data'

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcepts({image, title, description}) {
  return (
    <li>
      <img src={image} alt='alternate image'  />
      <h3>{title}</h3>
      <p>{description}</p>       
    </li>
  )
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts  {...CORE_CONCEPTS[0]} />
            <CoreConcepts  {...CORE_CONCEPTS[1]}/>
            <CoreConcepts  {...CORE_CONCEPTS[2]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;