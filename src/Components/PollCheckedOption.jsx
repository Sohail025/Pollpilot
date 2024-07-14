export const PollCheckedOption = ({ optionValue, option, optionNum }) => {
  return (
    <div className="bg-[#25bea5ec] mx-3 rounded-[0.8rem] py-1 flex flex-row items-center gap-2 shadow-sm sm:py-[0.7rem]">
      <div className="w-7 h-7 rounded-[50%] bg-[#822525] ml-1 text-center text-white text-[1rem] flex justify-center items-center sm:w-10 sm:h-10">
        <span className="sm:text-[1.3rem]">{optionNum}</span>
      </div>
      <div className="w-9/12">
        <p className="text-[0.7rem] sm:text-[1rem] md: w-6/12">{option}</p>
        <div className="h-3 border-[0.1rem] border-[#292626] rounded flex items-center ">
          <div className="w-[50%] bg-slate-700 h-[0.4rem] rounded"></div>
        </div>
      </div>
      <div className="w-2/12 px-1 md:pl-0 md:pr-2">
        <span className="px-2 sm:text-[1.5rem]">{`${optionValue}%`}</span>
      </div>
    </div>
  );
};
export default PollCheckedOption;
