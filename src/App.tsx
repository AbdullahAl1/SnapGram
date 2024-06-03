import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routs */} {/*this will render a sign in element/component */}
        {/* this auth layout rout is not closing rout */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        {/* private routs */}
        {/* index is the starting page 
            we create 2 folders root and auth to know what is public and what is not*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        
      </Routes>
    </main>
  );
};
export default App;
