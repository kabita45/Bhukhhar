import { NavLink } from "react-router-dom";
import "../styles/Home.scss";
import { assets } from "../assets/home/asstes";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroLeft = () => {
  const container1 = useRef();
  useGSAP(
    () => {
      gsap.from("#L-text", {
        y: 290,
        duration: 1.4,
        stagger: 0.3,
        opacity: 0,
      });
    },
    { scope: container1 },
  );
  return (
    <div ref={container1} className="hero-left">
      <p id="L-text">
        <img src={assets.heart} alt="heart image" />
        People Trust Us
      </p>
      <h1 id="L-text">
        <img src={assets.arrowdown} alt="" />
        We're <span>Serious</span> For <span>Food</span> & Delivery.
      </h1>
      <p id="L-text">
        Best cooks and best delivery guys all at your service. Hot tasty food
        will reach you in 60 minutes.
      </p>
      <NavLink to="/home" className="order-btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Order Now
      </NavLink>
    </div>
  );
};

const HeroRight = () => {
  const container2 = useRef();
  useGSAP(
    () => {
      gsap.from("#foodimg", {
        y: 290,
        duration: 1.3,
        stagger: 0.3,
        opacity: 0,
      });
    },
    { scope: container2 },
  );
  return (
    <div ref={container2} className="hero-right">
      <img src={assets.hero1} alt="hero image" />
      {[
        assets.food1,
        assets.food2,
        assets.food3,
        assets.food4,
        assets.food5,
        assets.food6,
        assets.seek,
      ].map((food, index) => (
        <img key={index} src={food} alt="food images" id="foodimg" />
      ))}
    </div>
  );
};

const HContainerContent = () => {
  return (
    <>
      <img src={assets.hero2} alt="hero image 2" />
      <div>
        <h2 className="mb-4">
          We are <span>more</span> than <span>multiple</span> service
        </h2>
        <p className="mb-4">
          This is a type of restaurant which typically serves food and drink, in
          addition to light refreshments such as baked goods or snacks. The term
          comes from the French word meaning food.
        </p>
        <div className="flex flex-wrap gap-x-24">
          <div className="flex-cont">
            <p className="flex items-center">
              <img src={assets.order} alt="" className="mr-2" /> Online Order
            </p>
            <p className="flex items-center">
              <img src={assets.reservation} alt="" className="mr-2" />{" "}
              Pre-Reservation
            </p>
            <p className="flex items-center">
              <img src={assets.reservation} alt="" className="mr-2" /> Super
              Chef
            </p>
          </div>
          <div className="flex-cont">
            <p className="flex items-center">
              <img src={assets.time} alt="" className="mr-2" /> 24/7 Service
            </p>
            <p className="flex items-center">
              <img src={assets.reservation} alt="" className="mr-2" /> Organized
              Foodhut Place
            </p>
            <p className="flex items-center">
              <img src={assets.reservation} alt="" className="mr-2" /> Clean
              Kitchen
            </p>
          </div>
        </div>
        <NavLink to="/about" className="order-btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          About Us
        </NavLink>
      </div>
    </>
  );
};

const H2ContainerContent = () => (
  <>
    <div>
      <h2 className="mb-4">
        It’s Now <span>More Easy</span> to Order by Our Mobile <span>App</span>
      </h2>
      <p className="mb-4">
        All you need to do is downlode one of the best delivery apps, make a and
        most companies are opting for mobile app devlopment for food delivery
      </p>
      <div className="flex gap-x-4 mt-4">
        <img
          className="store cursor-pointer hover:scale-110 transition-all"
          src={assets.googlestore}
          alt=""
        />
        <img
          className="store cursor-pointer hover:scale-110 transition-all"
          src={assets.appstore}
          alt=""
        />
      </div>
    </div>
    <img src={assets.hero3} alt="" />
  </>
);

const Home = () => {
  const container = useRef();
  useGSAP(
    () => {
      gsap.from(".slider", {
        y: -30,
        duration: 1.3,
        ease: "bounce.out",
        stagger: 0.3,
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: container },
  );
  return (
    <div ref={container} className="home-container mt-[67px]">
      <div className="hero-container flex items-center justify-between flex-wrap">
        <HeroLeft />
        <HeroRight />
        <img className="slider" src={assets.slider} alt="slider image" />
      </div>
      <div className="H-container flex items-center gap-x-20 flex-wrap">
        <HContainerContent />
      </div>
      <div className="H2-container flex items-center justify-between flex-wrap">
        <H2ContainerContent />
      </div>
    </div>
  );
};

export default Home;
