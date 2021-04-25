import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import PageOne from './components/page 1/PageOne'
import PageTwo from './components/page 2/PageTwo'
import PageThree from './components/page 3/PageThree'
import PageFour from './components/page 4/PageFour'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import './App.css';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter >
          <Sidebar />
      
          <Switch>
            <Route exact  path='/'>
              <Home/>
            </Route>
            <Route  path="/page1">
              <PageOne/>
            </Route>
            <Route  path="/page2">
              <PageTwo/>
            </Route>
            <Route  path="/page3">
              <PageThree/> 
            </Route>
            <Route path="/page4">
              <PageFour />
            </Route>
          </Switch>
      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
