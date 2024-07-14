export const PollUncheckedOption = ({ option, optionNum }) => {
  console.log(optionNum);

  return (
    <div className="bg-[#25bea5ec] mx-3 rounded-[0.8rem] py-1 flex flex-row items-center gap-2 shadow-sm sm:py-[0.7rem]">
      <div className="w-7 h-7 rounded-[50%] bg-[#822525] ml-1 text-center text-white flex justify-center items-center sm:w-10 sm:h-10">
        <span className="sm:text-[1.3rem]">{optionNum}</span>
      </div>
      <p className="sm:text-[1.3rem]">{option}</p>
    </div>
  );
};
export default PollUncheckedOption;
