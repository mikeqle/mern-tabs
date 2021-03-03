import './App.css';
import Tab from './components/Tab';

function App() {
  const data = [
    {
      header: "Tab 1",
      content: "Tab 1 content is showing here"
    },
    {
      header: "Tab 2",
      content: "Tab 2 content is showing here"
    },
    {
      header: "Tab 3",
      content: "Tab 3 content is showing here"
    },
  ];

  return (
    <div className="App">
      <Tab data={ data }/>
    </div>
  );
}

export default App;
