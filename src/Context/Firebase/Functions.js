import { db } from "./FirebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
const polldataCollection = collection(db, "PollsData");
export const GetData = async () => {
  try {
    const data = await getDocs(polldataCollection);
    const filteredData = data.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));
    return filteredData;
  } catch (error) {
    console.error(error);
  }
};
export const AddPoll = async (data) => {
  try {
    await addDoc(polldataCollection, data);
  } catch (error) {
    console.error(error);
  }
};
export const UpdatePoll = async (id, changes) => {
  const targatePoll = doc(db, "PollsData", id);
  try {
    await updateDoc(targatePoll, changes);
  } catch (error) {
    console.error(error);
  }
};
