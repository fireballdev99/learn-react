
import './App.css';
import { useState, useRef, useEffect, forwardRef } from 'react'
import Headline from './Headline';


const App = () => {
  const [greeting, setGreeting] = useState('Hello react');
  const handleChange = event => setGreeting(event.target.value);
  const ref = useRef();
  useEffect(() => ref.current.focus(), [])

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <Input value={greeting} handleChange={handleChange} ref={ref} />
    </div>
  );
}

const Input = forwardRef(({ value, handleChange }, ref) => (
  <input type="text" placeholder={value} onChange={handleChange} ref={ref} />
));


export default App;
