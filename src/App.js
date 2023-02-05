import './App.scss';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Calender from './Pages/Calender';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const currentUser = useContext(AuthContext);
  console.log(currentUser)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/signup" />
    }else{
      return children
    }
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/">

          <Route index element={
            <ProtectedRoute>
              <Calender />
            </ProtectedRoute>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          </Route>


        </Routes>


      </Router>
    </div>
  );
}

export default App;
