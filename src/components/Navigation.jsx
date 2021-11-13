import { nav } from "styles/Navigation.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect } from "react";

const Navigation = ({ props: { isLoggedIn, user, handleLogOut } }) => {
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  return (
    <>
      <nav className={nav}>
        {!isLoggedIn ? (
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        ) : (
          <>
            <NavLink to="/posts">
              <span>Posts</span>
            </NavLink>

            <NavLink to="/inputs">
              <span>Inputs</span>
            </NavLink>

            <span>User: {user}</span>

            <NavLink to="/">
              <Button onClick={handleLogOut}>Log out</Button>
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
};

export default Navigation;
