import { MovieFormType } from "./types";

const MovieForm: React.FC<MovieFormType> = ({ match }) => {
  return (
    <div>
      <h1>MovieForm {match.params.id}</h1>
    </div>
  );
};

export default MovieForm;
