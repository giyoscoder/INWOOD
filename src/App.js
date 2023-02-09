import "./App.scss";
import Showcase from "./Component/Showcase/Showcase";
import { useState, useRef, useEffect } from "react";
import { Category } from "./Component/Category/Category";
import { Products } from "./Component/Products/Products";
import { SecialPackage } from "./Component/SpeacialPackage/SpeacialPackage";
import { Creation } from "./Component/OurCreation/Creation";
import { Context } from "./Component/Context/Context";
import { Footer } from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Showcase />
      <Category />
      <Products />
      <SecialPackage />
      <Creation />
      <Footer />
    </>
  );
}

export default App;
