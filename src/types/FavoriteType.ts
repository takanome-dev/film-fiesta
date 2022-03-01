export type FavoriteType = {
	_id: string;
	user: { _id: string; name: string };
	movie: {
		_id: string;
		title: string;
		url: string;
		voteAverage: number;
	};
	date: Date;
};
