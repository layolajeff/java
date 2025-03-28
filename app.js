function isLoggedInandSubscribed(loggedin, subscribed) {
   if (loggedin === 'LOGGED_IN' || subscribed === 'SUBSCRIBED') {
    return true;
   }

 
    return false;
   }
   



console.log (isLoggedInandSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))