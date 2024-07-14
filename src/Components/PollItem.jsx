import { useSelector, useDispatch } from "react-redux";

import PollCheckedOption from "./PollCheckedOption";
import PollUncheckedOption from "./PollUncheckedOption";
export const PollItem = ({ PollItemHandler, item }) => {
  const ides = useSelector((state) => state.userData.ides);
  const pollOpen = Boolean(ides.find((id) => id === item.id));
  const numArray = ["a", "b", "c", "d"];
  return (
    <div
      onClick={(e) => PollItemHandler(e, item.id)}
      className="bg-[#fcc] h-[17.4rem] mx-3 shadow-lg rounded sm:h-[27rem] md:h-[29rem] lg:h-[27.4rem]"
    >
      <div className="px-3 pt-3 bg-slate-800 text-white rounded-tl rounded-tr text-center py-6 sm:py-7 sm:text-[1.5rem]">
        {item.question}
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:mt-6">
        {!pollOpen &&
          item.options.map((option, i) => (
            <PollUncheckedOption
              option={option}
              optionNum={numArray[i]}
              key={numArray[i]}
            />
          ))}
        {pollOpen &&
          item.options.map((option, i) => (
            <PollCheckedOption
              optionValue={item.optionValues ? item.optionValues[i] : 0}
              option={option}
              optionNum={numArray[i]}
              key={numArray[i]}
            />
          ))}
      </div>
    </div>
  );
};
export default PollItem;
