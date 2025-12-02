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

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt='alternate image'  />
      <h3>{props.title}</h3>
      <p>{props.description}</p>       
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
            <CoreConcepts 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image}
              />
            <CoreConcepts 
              title={CORE_CONCEPTS[2].title} 
              description={CORE_CONCEPTS[2].description} 
              image={CORE_CONCEPTS[2].image}
              />
            <CoreConcepts 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description} 
              image={CORE_CONCEPTS[3].image}
              />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;