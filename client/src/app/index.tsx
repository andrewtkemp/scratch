import * as React from 'react';
import {connect} from "react-redux";
import {fetchError, fetchRequest, fetchSuccess} from "../store/App";
interface IAppProps {
   compiler?: string,
   framework?: string,
   bundler?: string
}
export class App extends React.Component<IAppProps, {}> {
   render() {
   return <h1>This is a {this.props.framework} application using    {this.props.compiler} with {this.props.bundler}</h1>
   }
}

const mapStateToProps = ({compiler, framework, bundler}:IAppProps) =>({
   compiler,
   framework,
   bundler
})
export default connect(mapStateToProps, {fetchRequest:fetchRequest})(App);