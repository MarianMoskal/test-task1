import { lazy, Suspense, useState } from "react";
import { container } from "./styles/App.module.css";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";

import Navigation from "./components/Navigation";

const AuthView = lazy(() => import("./views/AuthView"));
const PostsView = lazy(() => import("./views/PostsView"));
const InputsView = lazy(() => import("./views/InputsView"));

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleIsLoggedIn = (user) => {
    setIsLoggedIn(true);
    setUser(user.phone);
    return navigate("/posts");
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    return navigate("/");
  };

  return (
    <>
      <Navigation props={{ isLoggedIn, user, handleLogOut }} />
      <div className={container}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            {!isLoggedIn && (
              <Route
                exact
                path="/"
                element={<AuthView handleSubmit={handleIsLoggedIn} />}
              />
            )}

            {isLoggedIn && (
              <>
                <Route path="/posts" element={<PostsView />} />

                <Route path="/inputs" element={<InputsView />} />
              </>
            )}
          </Routes>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
