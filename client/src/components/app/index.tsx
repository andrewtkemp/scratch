import * as React from 'react';
import * as style from "./style.css";
import {connect} from "react-redux";
export interface IAppProps {
   compiler: string,
   framework: string,
   bundler: string
}
export interface IAppState {
   compiler: string,
   framework: string,
   bundler: string
}
export interface IMapStateToProps {
   app:IAppProps
}
export class App extends React.Component<IAppProps, IAppState> {
   state = {
      compiler: "",
      framework: "",
      bundler: ""
   }
   render() {
   return <h1 className={style.barBaz}>This is a {this.props.framework} application using    {this.props.compiler} with {this.props.bundler}</h1>
   } 
}

const mapStateToProps = (state:IMapStateToProps) => {
   console.log(state);
   return {
      compiler:state.app.compiler,
      framework:state.app.framework,
      bundler:state.app.bundler
   }
}
export default connect(mapStateToProps)(App);
