import './App.css';
import Greetings from './Components/Greetings';
import { PersonList } from './Components/PersonList';

const List = [
  {
    first: 'G',
    last: 'Sai Nithin'
  },
  {
    first: 'Gurramgadda',
    last: 'Sai Nithin'
  },
  {
    first: 'Sai',
    last: 'Nithin'
  },
]

function App() {
  return (
    <div className="App">
      <Greetings name='Nithin' language='TypeScript' isLoggedIn={false} />

      <PersonList names={List}/>
    </div>
  );
}

export default App;
