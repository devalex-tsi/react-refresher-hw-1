import keyConceptsImage from './images/key-concepts.png';
import componentsImage from './images/components.png';
import stateImage from './images/state.png';
import eventsImage from './images/events.png';

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  return (
      <div>
        <header>
          <img src={keyConceptsImage} alt="Medal badge with a star" />
          <h1>Key React Concepts</h1>
          <p>Selected key React concepts you should know about</p>
        </header>
        <ul id="concepts">
          <li className="concept">
            <img src="TODO: IMAGE" alt="TODO: TITLE" />
            <h2>TODO: TITLE</h2>
            <p>TODO: DESCRIPTION</p>
          </li>
        </ul>
      </div>
  );
}

export default App;
