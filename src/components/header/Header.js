import "./Header.css";

// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { sliderItems } from "../../data";

// const responsive = {
// 	desktop: {
// 		breakpoint: { max: 3000, min: 1024 },
// 		items: 1,
// 	},
// 	tablet: {
// 		breakpoint: { max: 1024, min: 464 },
// 		items: 1,
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1,
// 		slidesToSlide: 1,
// 	},
// };

const Header = () => {
	// const slide = (item) => (
	// 	<div className="slide">
	// 		<img className="slide-img" src={item.img} alt="" />
	// 	</div>
	// );

	return (
		<section className="bg-white mb-4 header-container">
			{/* <div className="container p-0"> */}
			{/* <Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				containerClass="carousel-container"
				sliderClass="slider-items"
				removeArrowOnDeviceType={["tablet", "mobile"]}>
				{sliderItems.map((item) => slide(item))}
			</Carousel> */}
			{/* </div> */}
			<img
				src="/img/header_banner.jpg"
				alt=""
				style={{ width: "100%", height: "100%", objectFit: "cover" }}
			/>
		</section>
	);
};

export default Header;
