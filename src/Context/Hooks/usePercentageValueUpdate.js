export const usePercentageValueUpdate = (ob, index, subscribers) => {
  const VottedArray = ob.map((item) => (item / 100) * subscribers);
  const upadatedVotedArray = VottedArray.map((item, i) => {
    return i === index ? (item = item + 1) : (item = item);
  });
  const finalUpdatedArray = upadatedVotedArray.map(
    (item) => (item * 100) / (subscribers + 1)
  );
  const values = finalUpdatedArray;
  return [values];
};
