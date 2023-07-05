import componentsImage from './images/components.png';
import stateImage from './images/state.png';
import eventsImage from './images/events.png';
import ConceptItems from "./components/Concept/ConceptItems";
import Header from "./components/Header";

const concepts = [
  {
    id: 1,
    title: 'Components',
    image: componentsImage,
    description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    id: 2,
    title: 'State',
    image: stateImage,
    description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    id: 3,
    title: 'Events',
    image: eventsImage,
    description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  return (
      <div>
        <Header/>
        <ConceptItems concepts={concepts}/>
      </div>
  );
}

export default App;
