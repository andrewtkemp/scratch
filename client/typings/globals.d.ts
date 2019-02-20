declare module '*.css' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare interface NodeModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

declare interface System {
  import<T = any>(module: string): Promise<T>
}
declare var System: System;

declare const process: any;
declare const require: any;
