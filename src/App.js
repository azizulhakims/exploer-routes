import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componets/Home/Home';
import About from './componets/About/About';
import Products from './componets/Products/Products';
import Main from './layout/Main';
import Friends from './componets/Friends/Friends';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children:
      [
      {path: '/', element: <Home></Home>},
      {path: 'home', element: <Home></Home>},
      {path: 'products', element: <Products></Products>},

      {
        path: 'friends', 
        loader: async () =>{
          return fetch('https://jsonplaceholder.typicode.com/users');
        },
        element: <Friends></Friends>
      },
      ]
  },
   
    {path: 'about', element: <About></About>},
    {path: '*', element: <div>This Route Not Found</div>},
   

    

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
