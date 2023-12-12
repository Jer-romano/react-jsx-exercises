import './App.css';
import FirstComponent from './part1/FirstComponent';
import NamedComponent from './part1/NamedComponent';
import Tweet from './part2/Tweet';
import Person from './part3/Person';

function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <NamedComponent name="Jeremy" />
      <Tweet username="Jromano" name="Jeremy" message="I love pie" date="12/12/23"/>
      <Tweet username="Jrollz" name="John" message="Interesting message" date="12/11/23"/>
      <Tweet username="Voldemort" name="Declan" message="Pizza is the best" date="12/08/23"/>

      <Person name="Voldemort" age={29} hobbies={["fishing", "video games", "gym"]} />
      <Person name="Jeremy" age={26} hobbies={["cooking", "soccer", "gym"]} />
      <Person name="Todd" age={12} hobbies={["fishing", "DnD", "Hang-gliding"]} />
      
    </div>
  );
}

export default App;
