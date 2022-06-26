import './App.scss';
import MyComponent from './Exemple/MyComponent'
import ListTodo from './Todos/ListTodo'
import Home from './Exemple/Home'
import Navbar from './Navbar/Nav'
import ListUser from './Users/ListUser'
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
      <Router>
        <Navbar NavLink={NavLink}/>

        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/courses">
              <MyComponent />
            </Route>
            <Route path="/users" exact>
              <ListUser />
            </Route>
            <Route path="/users/:id">
              <DetailUser />
            </Route>
        </Switch>
  
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
  );
}

export default App;







