
import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login/Login';
import { Container, Row, Col } from "react-bootstrap"
import Signup from './components/Signup/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home/Home';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <UserAuthContextProvider>
          <Routes>
          <Route path= "/home" 
          element={
          <ProtectedRoute>
            <Home/>
            </ProtectedRoute>
          } 
          />
            <Route path= "/" element={<Login/>} />
            {/* <Route path= "/" element={<ForgotPassword/>} /> */}
            <Route path= "/signup" element={<Signup/>} />
            <Route path= "/forgotPassword" element={<ForgotPassword/>} />


          </Routes>
          </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
       {/* <Routes>
            <Route path= "/" element={<Login/>} />
            <Route path= "/signup" element={<Signup/>} />

          </Routes> */}
      {/* <Login /> */}

      </div>
      
  );
}

export default App;
