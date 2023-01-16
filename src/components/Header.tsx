import useCurrentUser from '@/hooks/useCurrentUser';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Avatar from './common/Avatar';
import SearchInput from './common/SearchInput';
import UserModal from './UserModal';
import { logo } from '@/assets';

const Header = () => {
  const user = useCurrentUser();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth < 650 && setOpenModal(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <header className="bg-white shadow h-14 flex items-center w-full sticky top-0 z-10">
      {openModal && (
        <UserModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <div className="flex justify-between items-center px-14 w-full">
        <div className="flex justify-center items-center">
          <Link to="/" className="w-full h-10">
            <img src={logo} alt="Vidly logo" className="w-full h-full" />
          </Link>
        </div>
        <div>
          <SearchInput />
          {/* <Link to="/search" className="search-icon">
            <FaSearch color="var(--color-dark-60)" size={20} />
          </Link> */}
          {user && user._id && (
            <div className="avatar">
              <Avatar handleOpenModal={() => setOpenModal(true)} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
