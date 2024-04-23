import Category from "../category/Category";
import ImageSlider from "../imageSlider/ImageSlider";

const HeroSection = () => {
    const images = [
        "https://i.ibb.co/QvMN8Vd/Banner-1.jpg",
        "https://i.ibb.co/xYzy3g7/Banner-4.jpg",
        "https://i.ibb.co/yQzyDc1/Banner-2.jpg",
        "https://i.ibb.co/nPWbjSH/Banner-3.jpg",
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