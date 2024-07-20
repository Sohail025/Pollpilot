export const usePercentageValueUpdate = (ob, sum, index) => {
  const values =
    ob.optionValues[0] !== undefined
      ? ob.optionValues.length > 0
        ? ob.optionValues?.map((item, i) => {
            return i === index
              ? Math.floor((item = item + sum + (100 - sum) / 4))
              : Math.floor(
                  (item =
                    item - item / targatPoll.subscribers + (100 - sum) / 4)
                );
          })
        : Array.from({ length: 4 }, (_, i) => {
            if (i === index) 100;
            else 0;
          })
      : [0, 0, 0, 0];

  return [values];
};
