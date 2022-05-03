import { useState } from 'react';
import './App.css';
import Item from './components/Item';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const inputHandler = () => {
    setItems([
      ...items,
      {name: inputText, id: Math.random() * 10}
    ])
    setInputText('');
  }

  return (
    <div className="App">
      <header>
        <span>
          <input 
            type="text" 
            value={inputText}
            id="todo-input" 
            onChange={e => setInputText(e.target.value)} 
            placeholder="Buy milk"
          />
          <button onClick={inputHandler}>+</button>
        </span>
        <button>Filter</button>
      </header>     
      <main>
        {items.map(item => <Item items={items} setItems={setItems} name={item.name} id={item.id} />)}
      </main>
    </div>
  );
}

export default App;
