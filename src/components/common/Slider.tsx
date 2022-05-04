import React from "react";
import styled from "styled-components";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../types";
import Card from "../Card";

const SwiperContainer = styled(Swiper)`
	/* max-width: calc(100vw - 8rem); */
	margin-top: 1rem;

	.swiper {
		display: flex;
	}

	.slide {
		width: 12.5rem;
		height: 18rem;
		border-radius: 0.8rem;
		overflow: hidden;
	}
`;

type Props = {
	data: Movies[];
};

const Slider: React.FC<Props> = ({ data }) => {
	return (
		<SwiperContainer
			modules={[Navigation, Autoplay]}
			spaceBetween={10}
			autoplay={{ delay: 3000, disableOnInteraction: true }}
			slidesPerView="auto"
			loop={false}
			slidesPerGroupAuto
			navigation
		>
			<div className="swiper">
				{data.map((item) => (
					<SwiperSlide key={item.id} className="slide">
						<Card movie={item} width="200" height="300" />
					</SwiperSlide>
				))}
			</div>
		</SwiperContainer>
	);
};

export default Slider;
