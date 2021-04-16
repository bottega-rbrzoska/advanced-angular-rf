interface Product {
  id: Guid;
  name: string;
  description: string;
  price: Money;
  category: string;
}

interface User {
  id: Guid;
  name: string;
  age: number;
  gotoWork: () => void
}


export interface TypeWithNevers {
  testNever1: never;
  testNever2: never;
  noNever: string;
}

type KeysWithoutNever = TypeWithNevers[keyof TypeWithNevers]

class MyClass {
  product: Product;
  testData? = 'sasdasdasd';
  myFunction() {};
  fun() { return ''}
}


type Guid = string;
type Currency = 'USD' | 'PLN'
type Money = number;

let num = 5;
let prod = {
  name: 'MyName'
}

interface SuperEvent {
  eventType: 'ErrorEvent' | 'SuccessEvent'
  eventData: string
}

type stringObject = {
  [k: string]: string
}

var myStringObj: stringObject = { test: 'asdasd' }

type PropsOfBaseClass<T, R> = {
  [K in keyof T]: T[K] extends R ? K : never
}
type OnlySelectedTypePropsFromClass<T, R> = Pick<T,  PropsOfBaseClass<T, R>[keyof T]>

type AllowedKeyNames<T, R> = PropsOfBaseClass<T, R>[keyof T]


type OnlyFunctionsFromClass<T> = Pick<T, AllowedKeyNames<T, Function>>

type OnlyFunctionsFromClass1 = OnlySelectedTypePropsFromClass<MyClass, Function>


type MyNewPartialType2 = Omit<Product, 'id'>

type NewObjectRequestData<BaseType> = Omit<BaseType, 'id'>

type PickedProductData =  Pick<Product, 'category' | 'description'>

type DropdownData = { value: any, label: string };

type DropdownMap = Record<string, DropdownData>

const dictionary: DropdownMap = {
  test: {label: 'ahahha', value: 122323},
  test1: {label: 'ahahha', value: 122323},
  test2: {label: 'ahahha', value: 122323}
}
