import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header";

function App() {
  return (
    <div>
    <Header></Header>

    <div className="App">
      <iframe
        src="http://ugarit.ialigner.com/embed.php?id=25751&pb=1&user=0&title=0&pi=0"
        height="600"
        width="600"
      ></iframe>
    </div>
    </div>
  );
}

export default App;
