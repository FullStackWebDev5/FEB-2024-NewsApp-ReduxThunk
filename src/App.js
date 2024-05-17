import './App.css';
import News from './components/News'
import { Provider } from 'react-redux'
import store from './store/index.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <News />
      </div>
    </Provider>
  );
}

export default App;