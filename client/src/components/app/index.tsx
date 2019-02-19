import * as React from 'react';
import * as style from "./style.css";
import {connect} from "react-redux";
import {IAppProps, IMapStateToProps, IMapDispatchToProps} from "./types";
import {fetchRequest, fetchSuccess, fetchError, Info } from "../../store/App";
export class App extends React.Component<IAppProps, {}> {
   componentDidMount(){
      this.props.fetchRequest();
   }
   render() {
   return <h1 className={style.barBaz}>Hello</h1>
   } 
}

const mapStateToProps = (state:IMapStateToProps) => ({
   app:state.app
})
export default connect<IMapStateToProps, IMapDispatchToProps>(mapStateToProps,{
   fetchRequest:fetchRequest
 })(App);
