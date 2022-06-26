import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import './styles/global.scss'
import reportWebVitals from './reportWebVitals';


// import vào dự án thư việc redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'




// Để tạo được 1 redux store ta cần SD createStore để tạo và nạp dl vào
const reduxStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    {/* Bọc ngoài dl bằng Provider của redux để redux và react chạy song song, và nạp dl dataa cho redux */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
