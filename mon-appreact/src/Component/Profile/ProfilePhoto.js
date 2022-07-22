import React from 'react';
import imageprofile from './imageprofile.jpg';
const decorationstyle={boxShadow:'2px 8px 6px gray',width:'240px'}
function ProfilePhoto() {
  return (
    <div style={decorationstyle}>
       
    <img src={imageprofile} height={250} width={240} />
    
    </div>
  );
}
export default ProfilePhoto