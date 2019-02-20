import * as React from "react";
import {connect} from "react-redux";


import {RootState} from "../../store";
import {userActions, userModels, userSelectors} from "../../store/User";

type Props = {
    users:userModels.User[];
    updateUser?:(user:{username:string, password:string, id:string}) => any;
    deleteUser?:(user:{id:string}) => any;
}
type State = {
    username:string,
    password:string,
    id:string
}
const getStyle = (): React.CSSProperties => ({
    textAlign: 'left',
    margin: 'auto',
    width: 200,
});
  
class UserList extends React.Component<Props,State>{
    readonly state: Readonly<State> = {
        username:"",
        password:"",
        id:""
    }
    handleUpdate = (event:React.MouseEvent<HTMLInputElement>):void => {
      let button = event.target as HTMLInputElement;
      const {value} = button;

    }
    handleDelete = (event:React.MouseEvent<HTMLInputElement>):void => {
      let button = event.target as HTMLInputElement;
      const {value} = button;
    }
    render(){
        return(
            <ul style={getStyle()}>
            {this.props.users.map(user => (
              <li key={user.id}>
                {user.username}
                <button value={user.id} onClick={this.handleUpdate}>Update User</button>
                <button value={user.id} onClick={this.handleDelete}>Delete User</button>
              </li>
            ))}
          </ul>
        )
    }
}
const mapStateToProps = (state: RootState) => ({
  users: userSelectors.getUsers(state.users)
});
export default connect(mapStateToProps, {
    updateUser: (user:{username:string, password:string, id:string}) => userActions.updateUser(user),
    deleteUser: (user:{id:string}) => userActions.deleteUser(user)
  })(UserList);