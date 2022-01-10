import React from 'react'
import { Navigate } from 'react-router';
import { useUserAuth } from '../../context/UserAuthContext';

 const ProtectedRoute = ({children}) => {
    //  let auth = "true";
    //  if(!auth) { 
        
            //ig this auth is false, then we want to navigate to the login page
            //if the user is not autenticated and still wants the access to the home component, we redirect it 
        //   return <Navigate to="/" /> //navigate redirects

    //  }

    let { user } = useUserAuth();  //destructuring the user from useUserAuth
    if (!user) {
        //   return <Navigate to="/" /> //navigate redirects

    return <Navigate to="/" />;

    }

          //if the user is authenticated, then we want to return the children so,
    return children;
};

export default ProtectedRoute
