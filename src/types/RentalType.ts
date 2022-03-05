export type RentalType = {
	_id: string;
	userId: string;
	movie: {
		_id: string;
		title: string;
		url: string;
		voteAverage: number;
	};
};
