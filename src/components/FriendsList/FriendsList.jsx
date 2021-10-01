import React from "react";
import {
 MyLi,Status
} from "./FriendsList.styled";
function FriendsList({data}){
    return(
    <ul className="friend-list">
   {data.map(obj=>(
       <MyLi key={obj.id} className="item">
       <Status  style={(obj.isOnline)? {backgroundColor:"green", width:20, height:20,display:"block",borderRadius:"50%"} :{backgroundColor:"red", width:20, height:20,display:"block",borderRadius:"50%"}}></Status>
       <img className="avatar" src={obj.avatar} alt="" width="48" />
       <p className="name">{obj.name}</p>
     </MyLi>
   ))}
  </ul>)


}

export default FriendsList;