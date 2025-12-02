import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { useState } from 'react';


function App() {
  const [tabContent, setTabContent] = useState('Please click a button');
    
  function selectHandler(selectedButton) {
    setTabContent(selectedButton);
    console.log('Selected tab', selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(concept => (
              <CoreConcepts  {...concept} />
            ))}                                                                                                                                                                                                                                                                                                                                               
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
         <menu>
          {CORE_CONCEPTS.map(concept => (
            <TabButton onSelect={()=>selectHandler(concept.title)}>{concept.title}</TabButton>
          ))}
         </menu>
         {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;