import React, {useState}from "react";
import ReactDom from "react-dom";
import { useEffect } from "react/cjs/react.production.min";
import "./index.css";


const App = () => {
const [cookies, updateCookies] = useState(0);

useEffect(() => {
  document.title = `You clicked ${cookies} times`
})

return (
  
<div className= "container">
  <h1>Cookie Clicker</h1>
<img id="cookie" src= "/cookie.png" alt= "cookie.png"  onClick={() => updateCookies(cookies + 1)}/>
<p id = "info">Cookies {cookies}</p>
</div>
)
}

ReactDom.render(<App />, document.getElementById("root"));
