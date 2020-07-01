import React, {useState} from 'react';
import Hello from './sayhello';
import Message from './message';

function App(){

const [users, setUser] = useState([
  {name: 'malek', text: 'whats good boys'},
  {name: 'john', text: 'whats good malek'},
  {name: 'malek', text: 'bruh'}
]);



// red + counting functions
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);

    // !isRed changes boolean value of isred
    setRed(!isRed);
  }


  return(
    <div>
      <h1>App component</h1>

        <h2>messages are hard coded in component</h2>
        <Message name='Malek' text='whats good boys' likes='69' />
        <Message name='bruh' text='sup malek' likes='69' />
        <Message name='bruh2' text='sup bruh' likes='69' />

        <hr/>
         {/* from sayhello.js */}
        <Hello />

        <hr/>

      {/* if isred is true then classname = red, if not it is '' */}
        <h1 className={isRed ? 'red' : ''}>change my color</h1> 
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>

        <hr/>

        <h2>messages from app.js useState</h2>
      {users.map(user =>(
        <Message name={user.name} text={user.text} />
      ))}

    </div>
  );
}

export default App;