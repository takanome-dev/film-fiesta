import useCurrentUser from '@/hooks/useCurrentUser';
import Container from '../styles/Avatar.styled';

type Props = {
  handleOpenModal: () => void;
};

const Avatar: React.FC<Props> = ({ handleOpenModal }) => {
  const user = useCurrentUser();

  return (
    <Container
      className="flex"
      onClick={handleOpenModal}
      tabIndex={0}
      aria-label="Click to open user modal"
    >
      <img src={user?.imageUrl} alt="User Avatar" />
    </Container>
  );
};

export default Avatar;
