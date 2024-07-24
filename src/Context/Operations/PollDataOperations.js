import { usePercentageValueUpdate } from "../Hooks/usePercentageValueUpdate";
export const ValuesChangeHandler = (state, action) => {
  const { id, optionNum } = action.payload;
  const index = state.numArray.findIndex((item) => item === optionNum);
  const data = JSON.parse(JSON.stringify(state.data));
  const targatPoll = data.find((item) => item.id === id);

  const updatedSubcribers = targatPoll.subscribers;
  const [updatedValue] = usePercentageValueUpdate(
    targatPoll.optionValues,
    index,
    updatedSubcribers
  );
  state.changes = {
    subscribers: updatedSubcribers + 1,
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
