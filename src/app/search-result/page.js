import Image from "next/image";
import Link from "next/link";
import test from "src/public/test.jpeg"
import icon_hat from "src/public/icon_hat.svg"
import icon_clock from "src/public/icon_clock.svg"
import icon_fork from "src/public/icon_fork.svg"


const SearchResult = () => {
  return (
   <div className="container mx-auto py-[40px]">
        <h3 className="text-[24px]">Search result</h3>
        <div className="flex flex-col lg:flex-row py-[32px]">
        <Image src={test} alt="test photo" className="items-center lg:w-1/3"/>
            <div className="bg-white items-center shadow-md lg:w-1/2 ml-[-50px] my-[30px] relative">
              <div className="flex flex-col pl-24 text-[16px]">
                <h2 className="text-[32px] py-[24px]">Classic Tiramisu</h2>
                <div className="flex flex-row">
                  <Image src={icon_hat} alt="icon_hat" className=""/>
                  <p className="pt-2 pl-6">Cooking Time:</p>
                </div>
                <div className="flex flex-row">
                  <Image src={icon_clock} alt="icon_clock" className=""/>
                  <p className="pt-2 pl-6">Prepping Time:</p>
                </div>
                <div className="flex flex-row">
                  <Image src={icon_fork} alt="icon_fork" className=""/>
                  <p className="pt-2 pl-6">Serving for:</p>
                </div>
                <button className="bg-grey w-[150px] min-h-[40px] absolute right-12 shadow-md bottom-12 rounded-xl hover:bg-white hover:border-[1px] hover:border-gray-600">
          <Link href="/search-result" className="">
            View recipe
          </Link>
        </button>
               </div>
            </div>
        </div>
   </div>
  );
};

export default SearchResult;