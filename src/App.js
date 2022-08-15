import React from 'react';
//import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import User from './components/User';
import Photo from './components/Photo';


 const App = () => {
   return (
     <AuthProvider>
        <Router>
          <div>
            <React.Fragment>
             <CssBaseline />
               <Container maxWidth="sm">
                  <Route exact path="/login" component={Login} /> 
                  <Route exact path="/signup" component={SignUp} />
               </Container>
            </React.Fragment>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/user" component={User} />
              <Route exact path="/photo" component={Photo} />
          </div>
        </Router>
     </AuthProvider>
   );
 };

export default App;
