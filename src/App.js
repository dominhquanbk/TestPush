import Login from './component/login';
import SignUp from './component/singup';
import { useState } from 'react';
import Header from './component/Header/header1';
import Mainpage from './component/mainpage';
import Credit from './component/credit';
import ProductMain from './component/Product/Product_Main';
export default function App() {
  const [show, setShow] = useState("");
  const [whatPage,setWhatPage]=useState("Mainpage");
//add tailwind and flowbite for css
  

  return (
    <>
      <Header setShow={setShow} setWhatPage={setWhatPage}></Header>
     
        {show === "Login" && <Login setShow={setShow}></Login>}
        {show === "SignUp" && <SignUp setShow={setShow}></SignUp>}

      {show === "" && (
        <>
          {whatPage==="Mainpage" && <Mainpage setWhatPage={setWhatPage}></Mainpage>}
          {whatPage==="ProductMain" && <ProductMain setWhatPage={setWhatPage}></ProductMain>}
         
        </>
      )}
       <Credit />
    </>
  );
}