import HomePage from './HomePage';
import { Router, Route, Switch } from 'react-router';
import About from './Pages/About';
import Service from './Pages/Service';
import ContactUs from './Pages/ContactUs';
import Error from './Pages/Error';
function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/aboutUs" component={About}></Route>
                <Route path="/service" component={Service}></Route>
                <Route path="/contactus" component={ContactUs}></Route>
                <Route component={Error}></Route>
            </Switch>
        </div>
    );
}

export default App;
