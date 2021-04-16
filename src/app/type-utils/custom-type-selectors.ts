export type PropsOfBaseClass<T, R> = {
  [K in keyof T]: T[K] extends R ? K : never
}
export type OptionalPropsOfBaseClass<T, R> = {
  [K in keyof T]?: T[K] extends R ? K : never
}

export type OnlySelectedTypePropsFromClass<T, R> = Pick<T,  PropsOfBaseClass<T, R>[keyof T]>
export type OnlySelectedTypeOptionalPropsFromClass<T, R> = Pick<T,  OptionalPropsOfBaseClass<T, R>[keyof T]>


