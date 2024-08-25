import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import {Provider} from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter}>
      <Body/>
      </RouterProvider>
    </Provider>
  );
}

export default App;


/**
 * Head
 * Body
 * SideBar
 *  MenuBar
 * MainContainer
 *  ButtonList
 *  VideoContainer
 *    VideoCard
 * 
 * 
 */
