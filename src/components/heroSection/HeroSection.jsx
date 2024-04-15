import Category from "../category/Category";

const HeroSection = () => {
    return (
        <div>
           <img className="h-40 lg:h-full md:h-full sm:h-full" src="/src/img/hero1.png" alt="not image found" />
           <Category/>
        </div>
    );
}

export default HeroSection;