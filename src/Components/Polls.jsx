import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { PollItem } from "./PollItem";
import { idTaker, idRemover } from "../Context/Features/UserDataSlice";
import { getPolls } from "../Context/Firebase/PollService";
import { AddNewPollHandler } from "../Context/Features/PollDataSlice";
import { LocalStorageHook } from "../Context/Hooks/LocalStorage";

export const Polls = () => {
  const dispatch = useDispatch();
  const polldata = useSelector((state) => state.pollData.data);
  const { useeEffectChecker } = useSelector((state) => state.userData);
  const ides = useSelector((state) => state.userData.ides);
  const PollItemHandler = (e, id) => {
    console.log(e);
    const [storageHook] = LocalStorageHook(id);
    console.log(storageHook);
    const isIdStored = ides.find((item) => item === id);
    if (!isIdStored) dispatch(idTaker(id));
    if (isIdStored) dispatch(idRemover(id));
  };
  const GetData = async () => {
    const data = await getPolls();
    if (data) dispatch(AddNewPollHandler(data));
  };
  useEffect(() => {
    if (useeEffectChecker) {
      GetData();
    }
  }, []);
  return (
    <div className="w-screen md:w-full mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
      {polldata.map((item) => (
        <PollItem
          PollItemHandler={PollItemHandler}
          item={item}
          key={item?.id}
        />
      ))}
      <br></br>
    </div>
  );
};
export default Polls;
