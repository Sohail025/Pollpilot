import { db } from "./FirebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Reference to the 'polls' collection
const pollCollection = collection(db, "Polldata");

export const getPolls = async () => {
  const snapshot = await getDocs(pollCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addPoll = async (poll) => {
  await addDoc(pollCollection, poll);
};

export const updatePoll = async (id, updatedPoll) => {
  const pollDoc = doc(db, "Polldata", id);
  await updateDoc(pollDoc, updatedPoll);
};

export const deletePoll = async (id) => {
  const pollDoc = doc(db, "Polldata", id);
  await deleteDoc(pollDoc);
};
const resetPolls = async () => {
  const snapshot = await getDocs(pollCollection);
  const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
};
// resetPolls();
