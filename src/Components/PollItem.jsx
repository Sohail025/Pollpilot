import { useSelector } from "react-redux";
import PollCheckedOption from "./PollCheckedOption";
import PollUncheckedOption from "./PollUncheckedOption";
export const PollItem = ({ item }) => {
  const { ides } = useSelector((state) => state.userData);
  const pollOpen = Boolean(ides.find((id) => id === item.id));
  const { numArray } = useSelector((state) => state.pollData);
  return (
    <div className="bg-[#fcc] mx-3 shadow-lg rounded pb-5">
      <div className="px-3 pt-3 bg-slate-800 text-white rounded-tl rounded-tr text-center py-6 sm:py-7 sm:text-[1.5rem]">
        {item.question}
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:mt-6 ">
        {!pollOpen &&
          item?.options.map((option, i) => (
            <PollUncheckedOption
              option={option}
              optionNum={numArray[i]}
              key={numArray[i]}
              id={item.id}
            />
          ))}
        {pollOpen &&
          item.options.map((option, i) => (
            <PollCheckedOption
              optionValue={item.optionValues ? item.optionValues[i] : 0}
              option={option}
              optionNum={numArray[i]}
              key={numArray[i]}
              id={item.id}
            />
          ))}
        <div className="flex justify-center items-center">
          <div>{`Subscribers = ${
            item.subscribers ? item.subscribers : 0
          }`}</div>
        </div>
      </div>
    </div>
  );
};
export default PollItem;
