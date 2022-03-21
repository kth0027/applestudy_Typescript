import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

let a: string = "kim";
// let 박스:JSX.Element= <div></div>;
let 박스: JSX.IntrinsicElements["div"] = <div></div>;

function App() {

  // let [user, setUser] = useState<string | number>('kim')
  let [user, setUser] = useState('kim')

  return (
    <div>
      { 박스 }
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}

function Profile(props : {name:string, age:string}) : JSX.Element{
                          // 언제나 type alias 사용 가능
  return (
    <div>{props.name}프로필입니다</div>
  )
}

export default App;
