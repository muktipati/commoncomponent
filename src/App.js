
import React from 'react';

import { createBrowserRouter,RouterProvider} from "react-router-dom"



import InputTemp from "./container/InputTemp";
import Login from './container/Login';
import Logout from './container/Logout';
// import withFormatting from './HOC/Withformatting';
import FormattedComponent from './container/Formatted';
import Withdataform from './HOC/Withdataform';
import ListEmp from './container/listemp';
import './App.css';
import Article from './container/Article';
import Emptable from './container/emptable';
import Header from './container/header';
import Post from "./container/post"
import Home from './routes/Home';
import About from './routes/About';
// import Main from './routes/main';
import RootLay from './routes/root';
import Errorpage from './routes/Errorpage';
import ColorPicker from './ColorPicker';
import { ColorProvider } from './ColorProvider';
import Theme from "./component/Theme"



class App extends React.Component {
  




  render() {
//     let islogin = true;
//     let template = null;
//     if (islogin) {
//       template = <Login />
//     } else {
//       template = <Logout />
//     }
// let Lists = Withdataform(ListEmp)
// let Table = Withdataform(Emptable)

let router = createBrowserRouter([ 
  {
    path: "/",
    element:<RootLay /> ,
    children: [
      {
        path: "/",
        element: <Home />
        
      },
      {
        path: "/about",
        element: <About />
        
      },
    ],
  },
])



    return (
      <>
        {/* <ul> {this.state.epmid.map((id,index) => {
          return (<li key={index}>{id}</li>)
        })}
        </ul> */}
        {/* <FormattedComponent />
        <Article />
        <Lists ids={this.state.count}/> */}
        {/* <Withdataform >
        <Table />
        </Withdataform> */}
        
        {/* <Datatable /> */}
        {/* <Logout emdata = {this.state.epmid}/> */}
        {/* <Header /> */}
        {/* <Post /> */}
        {/* <Main /> */}
        <ColorProvider>
        <Theme>
        <div>
        <h1>Color Theme Switcher</h1>
        <ColorPicker />
        <RouterProvider router={router}/>
        </div>
        </Theme>
        
        </ColorProvider>
        
      </>
    )
  }
}
export default App;
