import { Button } from "@mui/material";
export const AfterLogin = () => {
  return (
    <div className=" flex justify-center items-center gap-5 mt-24 sm:mt-64">
      <div className="flex flex-col items-center gap-5">
        <div className=" w-40 h-40 rounded-[50%] bg-slate-700 flex flex-col items-center "></div>
        <Button variant="contained">Logout</Button>
      </div>
    </div>
  );
};
export default AfterLogin;
