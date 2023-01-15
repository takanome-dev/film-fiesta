import Card from './Card';
import Container from './styles/CardList.styled';

type Props = {
  movies: Movies[];
};

const CardList: React.FC<Props> = ({ movies }) => {
  // grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr)]
  return (
    <div className="grid grid-cols-4 gap-4">
      {movies?.map((m) => (
        <Card movie={m} key={m.id} />
      ))}
    </div>
  );
};

export default CardList;
