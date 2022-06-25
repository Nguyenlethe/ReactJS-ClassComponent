
import './App.scss';
import MyComponent from './Exemple/MyComponent'
import ListTodo from './Todos/ListTodo'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
       {/* < MyComponent/> */}
      <ListTodo/>

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
    </>
    
  );
}

export default App;







