import { useState, useEffect } from "react";

function Profile() {

const [user,setUser] = useState({
userName:"",
email:"",
phone:""
});

useEffect(()=>{

fetch("http://localhost:8080/api/users/me")
.then(res=>res.json())
.then(data=>setUser(data))

},[]);

const updateProfile=(e)=>{

e.preventDefault();

fetch("http://localhost:8080/api/users/update",{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)

})
.then(res=>res.json())
.then(()=>alert("Profile Updated"))

};

return(

<div className="profile-container">

<h2>My Profile</h2>

<form onSubmit={updateProfile}>

<label>Username</label>
<input
value={user.userName}
onChange={(e)=>setUser({...user,userName:e.target.value})}
/>

<label>Email</label>
<input
value={user.email}
onChange={(e)=>setUser({...user,email:e.target.value})}
/>

<label>Phone</label>
<input
value={user.phone}
onChange={(e)=>setUser({...user,phone:e.target.value})}
/>

<button type="submit">Update Profile</button>

</form>

</div>

);

}

export default Profile;