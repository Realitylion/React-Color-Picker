import './App.css';
import ColorPicker from './components/colorPicker';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const colors = ["red", "lime", "blue", "yellow", "violet", 
                  "cyan", "orange", "purple", "pink", "green", "orangered", 
                  "turquoise", "brown", "darkorange", "teal", "gold"];
  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;