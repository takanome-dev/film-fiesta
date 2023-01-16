import useCurrentUser from '@/hooks/useCurrentUser';
import { useContext, useEffect, useState } from 'react';
import { FaRegComment, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { NavLink, Link, Outlet } from 'react-router-dom';
// import { Context } from "../context/GlobalContext";
import Avatar from './common/Avatar';
import Overlay from './common/Overlay';
import FeedBack from './FeedBack';
import links from './links';
import UserModal from './UserModal';

// type Props = {
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

const Sidebar = () => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // const { currentRoute, onRouteChange } = useContext(Context);
  // const condition = isOpen && window.innerWidth <= 650;
  const user = useCurrentUser();

  // const handleClick = (path: string) => {
  //   onRouteChange?.(path);
  //   setIsOpen(false);
  // };

  // const handleClose = () => {
  // 	const sidebar = document.querySelector("[data-sidebar]");
  // 	if (isOpen && window.innerWidth <= 650) {
  // 		sidebar?.classList.toggle("open");
  // 		setIsOpen(!isOpen);
  // 	}
  // };

  // useEffect(() => {
  // 	const handleResize = () => {
  // 		if (window.innerWidth > 650) {
  // 			setOpenModal(false);
  // 		}
  // 	};

  // 	window.addEventListener("resize", handleResize);
  // 	return () => window.removeEventListener("resize", handleResize);
  // });

  return (
    <>
      {openFeedback && (
        <FeedBack
          openFeedback={openFeedback}
          setOpenFeedback={setOpenFeedback}
        />
      )}
      <nav className="h-[calc(100vh-4rem)] sticky top-[3.5rem] lef-0">
        {/* {condition && (
          <Overlay
            bgColor="rgba(0, 0, 0, 0.2)"
            zIndex={3}
            handleClose={() => {
              document
                .querySelector('[data-sidebar]')
                ?.classList.remove('open');
              setIsOpen(false);
            }}
          />
        )}
        {openModal && (
          <UserModal openModal={openModal} setOpenModal={setOpenModal} />
        )} */}
        <div className="bg-white border-r h-full overflow-x-hidden w-44">
          <div className="flex flex-col justify-between h-[90%] py-4">
            <ul className="">
              {links.map((l, i) => (
                <li
                  key={i}
                  className="my-2 cursor-pointer transition rounded px-6 py-3 hover:bg-slate-100"
                >
                  <NavLink
                    className={({ isActive }) => 'flex items-center'}
                    to={l.path}
                  >
                    {l.icon('text-slate-500')}
                    <p className="ml-4 text-slate-600">{l.name}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="">
              <span
                className="flex items-center px-6 py-3 cursor-pointer transition rounded hover:bg-slate-100"
                onClick={() => setOpenFeedback(true)}
                tabIndex={0}
              >
                <FaRegComment className="text-slate-500" size={22} />
                <p className="ml-2 text-slate-600">Feedback</p>
              </span>
              {user?._id && (
                <Link
                  className="flex items-center cursor-pointer transition rounded px-6 py-3 hover:bg-slate-100"
                  to="/logout"
                >
                  <FaSignOutAlt className="text-slate-500" size={22} />
                  <p className="ml-2 text-slate-600">Sign out</p>
                </Link>
              )}
              {!user?._id && (
                <NavLink
                  className={({ isActive }) =>
                    'flex items-center cursor-pointer transition rounded px-6 py-3 hover:bg-slate-100'
                  }
                  to="/login"
                >
                  <FaSignInAlt className="text-slate-500" size={22} />
                  <p className="ml-2 text-slate-600">Sign in</p>
                </NavLink>
              )}
              {user && user._id && (
                <div className="user" onClick={() => setOpenModal(true)}>
                  <Avatar handleOpenModal={() => setOpenModal(true)} />
                  <p>{user.name}</p>
                </div>
              )}
            </div>
          </div>
          <p className="text-center mt-8 font-semibold text-slate-600">
            &copy; takanome_dev
          </p>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
