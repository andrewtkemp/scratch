import {fetchRequest, fetchSuccess, fetchError, Info} from "../../store/App";
export interface IAppProps {
    app:{
       compiler: string,
       framework: string,
       bundler: string
    },
    fetchRequest: typeof fetchRequest;
 }
 export interface IMapStateToProps {
    app:{
       compiler: string,
       framework: string,
       bundler: string
    }
 }
 export interface IMapDispatchToProps {
    fetchRequest: typeof fetchRequest;
 }