import './App.css'
import ReactLogo from './assets/react.svg'

function App() {
 const name = "AJ";

 const getYear = () => new Date().getFullYear();

return (
  <div>
    <h1>Hello {name}</h1>
    <p>Welcome to React</p>
    <h2> 3+2 = {3+2}</h2>
    <h2>Current Year is {getYear()}</h2>
    <div className="card">
      <h2 className="title">Product</h2>
<input type="text" />
    </div>
      <img src={ReactLogo} alt="logo" />
  </div>
  
);
}

export default App
