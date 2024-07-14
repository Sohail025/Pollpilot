export const AddNewPollOptionsItem = ({ option, SetOption, num }) => {
  return (
    <div className="flex flex-col">
      <label
        className="mx-10 sm:text-[1.2rem] md:mx-16 lg:mx-52 xl:mx-[20rem]"
        htmlFor="option1"
      >
        {`Option ${num} :`}
      </label>
      <input
        value={option}
        onChange={(e) => SetOption(e.target.value)}
        className="h-10 border-[0.2rem] border-[#fcc] rounded-[0.6rem] indent-1 mx-10 sm:h-12 md:mx-16 lg:mx-52 xl:mx-[20rem]"
        id="option1"
        type="text"
      />
    </div>
  );
};
export default AddNewPollOptionsItem;
