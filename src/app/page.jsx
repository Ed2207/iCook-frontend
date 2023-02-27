
import SearchBar from "@/components/searchbar";
import Ingredients from "@/components/ingredients";



export default function Home() {
  return (

    <main className="justify-center flex flex-col h-screen ">
      <div className=" text-center bg-red-100 h-3/5 flex flex-col ">
        <div className="pb-8">
          <h1 className="font-satisfy text-7xl">What is in your fridge ?</h1>
        </div>
        <div className="flex justify-center ">
          <SearchBar />
          <button className="ml-2 pl-2 pr-2 rounded-md h-12 bg-red border-2 border-red text-white transition-colors transform hover:bg-white hover:text-red hover:border-2 hover:border-red">Search for recipe</button>
        </div>
        <Ingredients/>
      </div>
    </main>
  );
}
