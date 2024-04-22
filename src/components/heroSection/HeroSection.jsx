import Category from "../category/Category";
import ImageSlider from "../imageSlider/ImageSlider";

const HeroSection = () => {
    const images = [
        "https://i.ibb.co/FgN8chq/Pics-Art-04-22-04-23-16.jpg",
        "https://i.ibb.co/z2FMPzx/Pics-Art-04-22-04-28-44.jpg",
        "https://i.ibb.co/ZVbvK23/Pics-Art-04-22-04-32-22.jpg",
        "https://i.ibb.co/59y20Mv/Hero.png",
      ];
    return (
        <div>
           {/* <img className="h-40 lg:w-full md:w-full sm:w-full lg:h-full md:h-full sm:h-full" src="https://i.ibb.co/HtJHdjY/hero1.png" alt="not image found" /> */}
            <ImageSlider images={images} />
           <Category/>
        </div>
    );
}

export default HeroSection;