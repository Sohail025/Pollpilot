import { SumCalc } from "../Hooks/sumCalc";
import { usePercentageValueUpdate } from "../Hooks/usePercentageValueUpdate";
export const ValuesChangeHandler = (state, action) => {
  const { id, optionNum } = action.payload;
  const index = state.numArray.findIndex((item) => item === optionNum);
  const data = JSON.parse(JSON.stringify(state.data));
  const targatPoll = data.find((item) => item.id === id);

  const [sum] = SumCalc(targatPoll);
  const [updatedValue] = usePercentageValueUpdate(targatPoll, sum, index);
  const updatedSubcribers = targatPoll.subscribers + 1;
  console.log(updatedValue, updatedSubcribers);

  state.changes = {
    subscribers: updatedSubcribers,
    optionValues: updatedValue,
  };
  state.data.forEach((item) => {
    item.id === id
      ? (item.subscribers = item.subscribers + 1) &&
        (item.optionValues = updatedValue)
      : item.optionValues;
  });
};
export const AddPollHandler = (state, action) => {
  if (action.payload) state.data = action.payload;
};
