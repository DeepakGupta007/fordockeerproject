import React from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import { useState, Fragment } from 'react';


function App() {

  const [userList,setUserList] = useState([]);

  const UserDataHandler = (user) => {
    setUserList(previousList => {
      return([user,...userList])
    });
  }

  return (
    <Fragment>
      <AddUser onUserSubmission={UserDataHandler} listSize={userList.length}></AddUser>
      <UsersList users={userList}></UsersList>
    </Fragment>
  );
}

export default App;
