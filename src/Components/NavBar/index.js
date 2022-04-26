import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAdminService, isDealerService } from "../../Services/LoginService";
import { logoutAction } from "../Actions/Login";
import "./index.css";

const NavBar = () => {
  const login = useSelector((state) => state.LogIn);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark wd-bg-color">
      <div className="container">
        <span className="navbar-brand mx-1 mx-md-3 mb-0 h1 wd-nav-bg-color">
          SARK
        </span>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav wd-nav-options">
            <li className="nav-item active mx-3">
              <Link className="wd-nav-bg-color nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active mx-3">
              <Link className="nav-link wd-nav-bg-color" to="search/">
                Search
              </Link>
            </li>
            {login.logedIn && !isAdminService() && !isDealerService() && (
              <li className="nav-item active mx-3">
                <Link className="nav-link wd-nav-bg-color" to="/profile">
                  View Profile
                </Link>
              </li>
            )}
            {login.logedIn && !isAdminService() && isDealerService() && (
              <li className="nav-item active mx-3">
                <Link className="nav-link wd-nav-bg-color" to="/dealer">
                  Dealer
                </Link>
              </li>
            )}
            {login.logedIn && isAdminService() && !isDealerService() && (
              <li className="nav-item active mx-3">
                <Link className="nav-link wd-nav-bg-color" to="/admin">
                  Admin
                </Link>
              </li>
            )}

            {login.logedIn ? (
              <li className="nav-item active mx-3">
                <Link
                  className="nav-link wd-nav-bg-color"
                  onClick={async () => {
                    logoutAction(dispatch);
                  }}
                  to="/"
                >
                  <strong> LogOut</strong>
                </Link>
              </li>
            ) : (
              <li className="nav-item active mx-3">
                <Link
                  className="nav-link wd-nav-bg-color"
                  onClick={() => {}}
                  to="/login"
                >
                  <strong> LogIn</strong>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
