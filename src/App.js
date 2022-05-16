import './App.css';
import SelectSearch from 'react-select-search';
import { menuItems } from "./menuItems"

function App() {
  return (
    <div style = {{ display: 'flext', alignItems: 'center', justifyContent: 'center' }}>
      <SelectSearch options={menuItems} placeholder="Search" />
    </div>
  );
}

export default App;
