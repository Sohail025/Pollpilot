import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { PollItem } from "./PollItem";
import { AddNewPollHandler } from "../Context/Features/PollDataSlice";
import { GetData } from "../Context/Firebase/Functions";
export const Polls = () => {
  useEffect(() => {
    const GetDataHandler = async () => {
      const data = await GetData();
      dispatch(AddNewPollHandler(data));
    };
    GetDataHandler();
  }, []);
  const dispatch = useDispatch();
  const polldata = useSelector((state) => state.pollData.data);
  return (
    <div className="w-screen md:w-full mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
      {polldata.map((item) => (
        <PollItem item={item} key={item?.id} />
      ))}
      <br></br>
    </div>
  );
};
export default Polls;
