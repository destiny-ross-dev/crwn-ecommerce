import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/auth/auth.component";

const Shop = () => {
  return <h2>I am the shop page</h2>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
