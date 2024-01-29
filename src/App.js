import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting';
import { PeopleList } from './PeopleList';

const chikis =  [{
  name: 'Ignacio',
  age: 30,
  hairColor: 'dark brown',
},{
  name: 'Andres',
  age: 31,
  hairColor: 'brown',
},{
  name: 'Silvia',
  age: 29,
  hairColor: 'dark brown',
},{
  name: 'Rebeca',
  age: 29,
  hairColor: 'blonde',
}];

function App() {
  let reactName = 'REACT';
  let url = 'https://reactjs.org';

/*   const displayAlert = () =>{
    alert('Hello');
  } */

  

  return (
    <div className="App">
      <header className="App-header">
        <p style={{color:'red', fontSize:'96px'}}> Big Red Text</p>
        <Greeting name="Rebeca" numberOfMessages={50} />
        <PeopleList chikis={chikis} />
        {/* <button onClick={displayAlert}>Click Me!</button> */}
        <button onClick={() => alert('Hello')}> Click me! </button>
        <p>
          Esta es mi primera app en {reactName}
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
