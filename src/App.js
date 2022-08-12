import React,{useEffect} from 'react';
import './App.css';

function App() {
  function showNotification(){
    const notification = new Notification("New Notification !",{
      body:"This is for Testing"
    })
  }
  
  useEffect(() => {
    if(Notification.permission === 'granted'){
      showNotification();
    }else {
      Notification.requestPermission().then(permission => {
        showNotification();
      })
      console.log()
    }
  })

  
  return (
    <div className="App">
      <h2>Push Notification</h2>
      <p>React App</p>
    </div>
  );
}

export default App;
