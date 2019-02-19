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