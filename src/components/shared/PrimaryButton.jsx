import { FaArrowRight } from "react-icons/fa";


const PrimaryButton = () => {
  return (
    <>
      <div className="flex items-center cursor-pointer text-white group">
        <button className="bg-primary h-[40px] px-3 py-2  group-hover:bg-red">Choose you Meal Plan</button>

        <FaArrowRight className="inline-block p-2 bg-primaryDark text-base h-[40px] w-[40px] group-hover:!translate-x-2 duration-200" />

      </div>
    </>
  )
}


export default PrimaryButton