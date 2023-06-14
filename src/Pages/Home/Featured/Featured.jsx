
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it Out"
        heading="Feature Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pt-8 pb-20 px-32">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit . Ipsa eum
            cupiditate quia at veniam, voluptatum ducimus natus maiores minus,
            error doloribus eveniet modi debitis omnis illo optio est itaque
            suscipit?
          </p>
          <button className="btn btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
