import { addPoll } from "../Firebase/PollService";

export const AddData = async (newpoll) => {
  try {
    if (newpoll) await addPoll(newpoll);
  } catch (error) {
    console.error("Error adding data to Firebase", error);
  }
};
