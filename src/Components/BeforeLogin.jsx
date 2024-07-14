import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export const BeforeLogin = () => {
  const theme = useTheme();
  const isSmallScreen640 = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen768 = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen1024 = useMediaQuery(theme.breakpoints.down("md"));

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col items-center mt-14 sm:mt-32 md:mt-52">
      <div className="bg-slate-700 h-32 w-32 rounded-[50%]"></div>
      <div className="flex flex-col w-full">
        <FormControl
          sx={{
            mx: isSmallScreen640
              ? 3
              : 4 && isSmallScreen768
              ? 4
              : 12 && isSmallScreen1024
              ? 4
              : 29,
            my: 2,
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type="email"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                ></IconButton>
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>
        <FormControl
          sx={{
            mx: isSmallScreen640
              ? 3
              : 4 && isSmallScreen768
              ? 4
              : 12 && isSmallScreen1024
              ? 4
              : 29,
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
    </div>
  );
};
export default BeforeLogin;
