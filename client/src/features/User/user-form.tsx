import * as React from "react";
import {connect} from "react-redux";


import {RootState} from "../../store";
import {userActions} from "../../store/User";

type Props = {
    addUser: (user:{username:string, password:string}) => any;
}
type State = {
    username:string;
    password:string;
}

class UserForm extends React.Component<Props, State> {
    readonly state: Readonly<State> = {
        username:"",
        password:""
    }
    handleChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        this.setState(prevState => ({
            ...prevState,
            [name]: value
          })) 
    }
    handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        const {username, password} = this.state;
        this.props.addUser({username, password});
    }
    render(){
        const {username, password} = this.state;
        const {handleChange, handleSubmit} = this;
        return(
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              defaultValue={username}
              onChange={handleChange}
            />
            &nbsp;
            <input
              type="text"
              placeholder="Password"
              name="password"
              defaultValue={password}
              onChange={handleChange}
            />
            <button type="submit" disabled={!username || !password}>
              Add User
            </button>
          </form>
        )
    }
}
const mapStateToProps = (state: RootState) => ({});
export default connect(mapStateToProps, {
    addUser: (user:{username:string, password:string}) => userActions.addUser(user),
  })(UserForm);