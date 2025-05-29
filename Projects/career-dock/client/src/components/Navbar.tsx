import {
  BsOpencollective,
  BsFillHouseFill,
  BsInfoCircleFill,
  BsFillPeopleFill,
  BsFillPlusSquareFill,
  BsFillGrid1X2Fill,
} from "react-icons/bs";
import NavLink from "./NavLink";
import LoginButton from "./ui/LoginButton";
import RegisterButton from "./ui/RegisterButton";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
// import LogoutButton from "./ui/LogoutButton";

const commonNavItems = [
  {
    key: 0,
    label: "Home",
    icon: <BsFillHouseFill />,
    link: "/",
  },
  {
    key: 1,
    label: "About",
    icon: <BsInfoCircleFill />,
    link: "/about",
  },
  {
    key: 2,
    label: "Community",
    icon: <BsFillPeopleFill />,
    link: "/community",
  },
];

const userNavItems = [
  {
    key: 0,
    label: "Dashboard",
    icon: <BsFillGrid1X2Fill />,
    link: "/dashboard",
  },
  {
    key: 1,
    label: "Create",
    icon: <BsFillPlusSquareFill />,
    link: "/create",
  },
];

const Navbar = () => {
  const { user, logout } = useUser();

  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="w-full px-16 py-4 bg-zinc-900 flex items-center justify-between cursor-default">
      <div className="flex items-center gap-2 text-4xl text-amber-500 font-bold uppercase">
        <BsOpencollective />
        <h1>Career Dock</h1>
      </div>
      <div className="flex items-center gap-8">
        {commonNavItems.map((navItem) => (
          <NavLink
            key={navItem.key}
            label={navItem.label}
            icon={navItem.icon}
            link={navItem.link}
          />
        ))}
      </div>
      {user && (
        <div className="flex items-center gap-8">
          {userNavItems.map((navItem) => (
            <NavLink
              key={navItem.key}
              label={navItem.label}
              icon={navItem.icon}
              link={navItem.link}
            />
          ))}
          {/* <LogoutButton /> */}
        </div>
      )}
      {user ? (
        <div className="relative">
          <div
            className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            {user.firstName[0].toUpperCase()}
          </div>
          {profileOpen && (
            <div className="absolute right-0 mt-2 bg-zinc-800 rounded-md shadow-md py-2 w-40">
              <button
                onClick={() => {
                  setProfileOpen(false);
                  navigate("/dashboard");
                }}
                className="block w-full text-left px-4 py-2 hover:bg-zinc-700 text-sm text-white"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  logout();
                  toast.success("You are logged out.", {
                    autoClose: 3000,
                    theme: "dark",
                  });
                  setProfileOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-rose-500 text-sm text-white"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-8">
          <LoginButton />
          <RegisterButton />
        </div>
      )}
    </div>
  );
};

export default Navbar;
