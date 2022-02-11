import CardList from "./CardList";
import Pagination from "./common/Pagination";
// import MoviesTable from "./MoviesTable";
// import { MoviesPropsType, MoviesStateType } from "./types";

const Movies = () => {
	return (
		<>
			<CardList />
			<Pagination />
		</>
	);
};

export default Movies;

{
	/* <div className="row">
			<div className="col-3">
					<ListGroup
						items={genres}
						selectedItem={selectedGenre}
						onItemSelected={this.handleGenreSelect}
					/>
				</div>
			<div className="col">
				{this.props.user && (
						<Link to="/movies/new" className="btn btn-primary mb-3">
							New Movie
						</Link>
					)}
				<Search value={searchQuery} onSearch={this.handleSearch} />
				<MoviesTable
						movies={movies}
						sortColumn={sortColumn}
						handleDelete={this.handleDeleteMovie}
						handleLike={this.handleLikeMovie}
						handleSort={this.handleSortMovie}
					/>
				<Pagination
						pageSize={pageSize}
						itemsCount={totalCount}
						currentPage={currentPage}
						onPageChange={this.handlePageChange}
					/>
			</div>
		</div> */
}
