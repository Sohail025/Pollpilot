import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { UpdatePoll } from "../Context/Firebase/Functions";
import { idTaker, ChangedIdHandler } from "../Context/Features/UserDataSlice";
import { ValuesHandler } from "../Context/Features/PollDataSlice";
export const PollUncheckedOption = ({ id, optionNum, option }) => {
  const dispatch = useDispatch();
  const { ides, changedId } = useSelector((state) => state.userData);
  // console.log(changedId);
  const { changes, data } = useSelector((state) => state.pollData);
  const usePollEventHandler = (id, optionNum) => {
    const isIdStored = Boolean(ides.find((item) => item === id));
    if (!isIdStored) dispatch(idTaker(id));
    dispatch(ValuesHandler({ id, optionNum }));
    dispatch(ChangedIdHandler(id));
    // console.log(id);
    // if (changedId) console.log(changedId);
  };
  useEffect(() => {
    const FetchFunc = async () => {
      const updateCheck = changes.optionValues.every((item) => item === 0);
      // console.log(changedId, changes);
      if (!updateCheck) {
        await UpdatePoll(changedId, changes);
      }
    };
    FetchFunc();
  }, [changedId, changes]);
  return (
    <div
      onClick={() => usePollEventHandler(id, optionNum)}
      className="bg-[#25bea5ec] mx-3 rounded-[0.8rem] py-1 flex flex-row items-center gap-2 shadow-sm sm:py-[0.7rem]"
    >
      <div className="w-7 h-7 rounded-[50%] bg-[#822525] ml-1 text-center text-white flex justify-center items-center sm:w-10 sm:h-10">
        <span className="sm:text-[1.3rem]">{optionNum}</span>
      </div>
      <p className="sm:text-[1.3rem]">{option}</p>
    </div>
  );
};
export default PollUncheckedOption;
