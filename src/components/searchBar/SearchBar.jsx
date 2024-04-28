import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";

// Search Data
const searchData = [
  {
      name: 'Fashion',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Shirt',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'Jacket',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
  {
      name: 'Mobile',
      image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg'
  },
  {
      name: 'Laptop',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Home',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'book',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
]

const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context
    // Search State 
    const [search, setSearch] = useState("");

    // Filter Search Data
    const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8)

    const navigate = useNavigate();

  return (
    <div className="">
    {/* search input  */}
    <div className="input flex justify-center items-center">
        <input
            type="text"
            id="search"
            placeholder='Search here'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=' bg-gray-200 placeholder-gray-800 rounded-lg px-2 py-2 lg:w-80 md:w-96 sm:w-96 focus:outline-none border focus:border-[#1c045f] focus:ring-[#1c045f] pr-16'
        />
        <label htmlFor="search" className="text-3xl -ml-10 cursor-pointer active:">🧐</label>
    </div>

    {/* search drop-down  */}
    <div className=" flex justify-center">
        {search && <div className="block absolute bg-gray-200 w-80 lg:w-80 md:w-96 sm:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ?
                <>
                    {filterSearchData.map((item, index) => {
                        return (
                            <div
                            onClick={()=> navigate(`productinfo/${item.id}`)}
                            key={index} className="py-2 px-2 cursor-pointer hover:bg-blue-gray-600">
                                <div className="flex items-center gap-2">
                                    <img className="w-10" src={item.productImageUrl} alt="" />
                                    {item.title}
                                </div>
                            </div>
                        )
                    })}
                </>
                :

                <>
                    <div className="flex justify-center">
                        <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                    </div>
                </>}
        </div>
        }
    </div>
</div>
  );
}

export default SearchBar;