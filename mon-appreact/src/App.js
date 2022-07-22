import react from 'react';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from'./Component/Profile/Adress';


function App() {
  return (
    <div className="details">
      <div className="App">
      <div className='appph'>
      <ProfilePhoto/>
      </div>
      <div className='decname'>
     <FullName/>
     </div>
     <div className='decadress'>
     <Adress/>
     </div>
     </div>
    </div>
  );
}

export default App;
