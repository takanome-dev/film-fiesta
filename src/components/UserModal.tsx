import useCurrentUser from '@/hooks/useCurrentUser';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Overlay from './common/Overlay';
import Container from './styles/UserModal.styled';

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserModal: React.FC<Props> = ({ setOpenModal, openModal }) => {
  const user = useCurrentUser();

  return (
    <>
      <Container>
        {openModal && (
          <Overlay
            zIndex={window.innerWidth > 650 ? 2 : 4}
            bgColor="transparent"
            handleClose={() => setOpenModal(false)}
          />
        )}
        <div className="wrapper">
          {user?.isAdmin && (
            <Link to="/feedbacks" className="feedback">
              My Feedbacks
            </Link>
          )}
          <Link
            to="/profile"
            className="flex"
            onClick={() => setOpenModal(false)}
          >
            <FaUser color="var(--dark-60)" />
            <p>Profile</p>
          </Link>
          <Link
            to="/logout"
            className="flex"
            onClick={() => setOpenModal(false)}
          >
            <FaSignOutAlt color="var(--dark-60)" />
            <p>Sign Out</p>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default UserModal;
