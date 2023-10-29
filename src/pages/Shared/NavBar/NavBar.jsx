import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import {
  AlignJustify,
  ClipboardEdit,
  Forward,
  HeartHandshake,
  LogIn,
  LogOut,
  Plus,
  ShoppingCart,
  Store,
  User,
  UserCog,
} from "lucide-react";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">
          <Store /> Home
        </Link>
      </li>
      <li>
        <Link to="/deals">
          <HeartHandshake />
          Deals
        </Link>
      </li>
      <li>
        <Link to="/orders">
          <ShoppingCart />
          Orders
        </Link>
      </li>
      <li>
        <Link to={"/checkout"}>
          <Forward />
          Check Out
        </Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <User /> Admin
          </summary>
          <ul className="p-2">
            <li>
              <Link to={"/manage"}>
                <UserCog />
                Manage
              </Link>
            </li>
            <li>
              <Link to={"/addProducts"}>
                <Plus />
                Add Products
              </Link>
            </li>
            <li>
              <Link to={"/editproducts"}>
                <ClipboardEdit /> Edit Products
              </Link>
            </li>
          </ul>
        </details>
      </li>
      {user?.email ? (
        <>
          <li>
            <button onClick={handleLogOut}>
              <LogOut /> Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <LogIn />
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1 hidden sm:ml-6 sm:block">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Grocery Valley
          </Link>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <ul className="flex menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
      <div className="navbar bg-base-100 sm:ml-6 sm:block -mt-16 md:hidden lg:hidden">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Grocery Valley
          </Link>
        </div>
        <div>
            <div className="">
              <ul className="menu menu-vertical px-1">
                <li tabIndex={0}>
                  <details>
                    <summary>
                      <AlignJustify />
                    </summary>
                    <ul className="p-2">{navItems}</ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default NavBar;
