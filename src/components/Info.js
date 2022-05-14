import React from 'react';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';


function Info(props) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div style={{ display: props.style, width: "35rem" }} class="center card" >
      <AccountBoxRoundedIcon style={{ fontSize: 80 }}/>
      <div class="card-body">
          <h2 class="card-text">{user.username} details:</h2>
          <h3 class="card-text">address: {user.address.street}, {user.address.city}</h3>
          <h3 class="card-text">email: {user.email}</h3>
          <h3 class="card-text">phone: {user.phone}</h3>
      </div>
    </div>
      )
  }

  export default Info;