import { Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import ScrollToTop from "./Component/ScrollToTop";
import "./App.css"
// import Test from "./Test/Test";



export default function App() {
  return (
    <div>
      {/* <ScrollToTop /> */}
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
      {/* <Test /> */}
    </div>
  );
}



