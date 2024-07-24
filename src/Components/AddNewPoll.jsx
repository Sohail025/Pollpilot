import { Button } from "@mui/material";
import AddOptionSelect from "../muiComponents.jsx/AddOptionSelect";
import { useState, useEffect } from "react";
import { AddPoll } from "../Context/Firebase/Functions";
import AddNewPollOptionsItem from "./AddNewPollOptionsItem";
import { AddNewPollHandler } from "../Context/Features/PollDataSlice";
import { useDispatch } from "react-redux";
export const AddNewPoll = () => {
  const dispatch = useDispatch();
  const [newpoll, setNewpoll] = useState(null);
  const [question, SetQuestion] = useState();
  const [option1, SetOption1] = useState();
  const [option2, SetOption2] = useState();
  const [option3, SetOption3] = useState();
  const [option4, SetOption4] = useState();
  const [correctOption, setCorrectOption] = useState();
  const AddPollHandler = () => {
    if (!(question && option1 && option2 && option3 && option4)) return;
    const newPoll = {
      question,
      options: [option1, option2, option3, option4],
      optionValues: [0, 0, 0, 0],
      correctOption,
      subscribers: 0,
    };
    dispatch(AddNewPollHandler([newPoll]));
    if (newPoll) AddPoll(newPoll);
    setNewpoll(newPoll);
    SetQuestion("");
    SetOption1("");
    SetOption2("");
    SetOption3("");
    SetOption4("");
    setCorrectOption(0);
  };
  return (
    <form className="mt-20 flex flex-col gap-9 lg:mt-20">
      <div className="flex flex-col mx-10 md:mx-16 lg:mx-52 xl:mx-[20rem]">
        <label className="sm:text-[1.3rem]" htmlFor="Question">
          Question :
        </label>
        <input
          value={question}
          onChange={(e) => SetQuestion(e.target.value)}
          className=" h-12 border-[0.2rem] border-[#b53b3b] rounded-[0.6rem] indent-1 sm:h-14"
          id="Qoustion"
          type="text"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <AddNewPollOptionsItem
          option={option1}
          SetOption={SetOption1}
          num={1}
        />
        <AddNewPollOptionsItem
          option={option2}
          SetOption={SetOption2}
          num={2}
        />
        <AddNewPollOptionsItem
          option={option3}
          SetOption={SetOption3}
          num={3}
        />
        <AddNewPollOptionsItem
          option={option4}
          SetOption={SetOption4}
          num={4}
        />
        <div className="mx-10 md:mx-16 lg:mx-52 xl:mx-[20rem] flex justify-between">
          <Button
            onClick={AddPollHandler}
            className="sm:w-34 sm:h-10"
            variant="contained"
          >
            Submit
          </Button>
          <AddOptionSelect setCorrectOption={setCorrectOption} />
        </div>
        <br></br>
      </div>
    </form>
  );
};
export default AddNewPoll;
