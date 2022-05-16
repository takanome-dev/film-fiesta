export const formatMoney = (amount: number): string  => {
	const formatter = Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	});

	return formatter.format(amount);
};
