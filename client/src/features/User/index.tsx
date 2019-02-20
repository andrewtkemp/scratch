import * as React from 'react';

import UserForm from "./user-form";
import UserList from "./user-list";
export default () => (
  <React.Fragment>
    <UserForm/>
    <br/>
    <UserList/>
  </React.Fragment>
);