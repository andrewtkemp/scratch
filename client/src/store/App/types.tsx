export interface Info {
    compiler: string,
    framework: string,
    bundler: string
  }

export type ApiResponse = Record<string, {}>

export const FETCH_REQUEST = '@@App/FETCH_REQUEST';
export const FETCH_SUCCESS= '@@App/FETCH_SUCCESS';
export const FETCH_ERROR = '@@App/FETCH_ERROR';


export interface AppState {
    readonly compiler: string,
    readonly bundler:string,
    readonly framework: string
    readonly errors?: string
  }