import Earthquake from "./components/Earthquake";
import Time from "./components/Time";
import Timeline from "./components/Timeline";

import Warnings from "./components/Warnings";

import { DataProvider } from "./context/DataContext";
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Earthquake Information &amp; Tsunami Forecast</h1>
      </header>

     <DataProvider>
      <Time />

      <Warnings />
   
      <Timeline />
     
     </DataProvider>
    </div>
  );
}

export default App;
