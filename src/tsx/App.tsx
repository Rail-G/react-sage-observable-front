import { Provider } from 'react-redux'
import '../css/App.css'
// import { store } from './search/redux/store/store'
import { store } from './MainStore'
import { MainRoute } from './MainRoute'


function App() {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  )
}

export default App
