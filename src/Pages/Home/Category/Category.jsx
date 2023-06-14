import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Category.css";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import slide6 from "../../../assets/home/slide6.jpg";
import slide7 from "../../../assets/home/slide7.jpg";
import slide8 from "../../../assets/home/slide8.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Category = () => {
  return (
    <section>
      <SectionTitle
      subHeading={"From 11:00am to 10:00pm"}
      heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        autoplay={false}
        arrows={false}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
      >
        <div className="slide-content">
          <img src={slide1} alt="First Slide" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Salads
          </h3>
        </div>
        <div className="slide-content">
          <img src={slide2} alt="Second Slide" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Pizzas
          </h3>
        </div>
        <div className="slide-content">
          <img src={slide3} alt="Third Slide" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Soups
          </h3>
        </div>
        <div className="slide-content">
          <img src={slide4} alt="Fourth Slide" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Desserts
          </h3>
        </div>
        <div className="slide-content">
          <img src={slide5} alt="Fifth Slide" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Burrito beef
          </h3>
        </div>
        <div className="slide-content">
          <img src={slide6} alt="Sixth Slide" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Patishaptas
          </h3>
        </div>
        <div className="slide-content">
          <img src={slide7} alt="Seventh Slide" />
          <h3 className="text-4xl uppercase -mt-20 text-white text-center">
            Chicken<br />Wings
          </h3>
        </div>
        <div className="slide-content">
          <img src={slide8} alt="Eighth Slide" />
          <h3 className="text-4xl uppercase -mt-16 text-white text-center">
            Burgers
          </h3>
        </div>
      </Slide>
    </section>
  );
};

export default Category;

