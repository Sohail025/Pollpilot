import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import BallotIcon from "@mui/icons-material/Ballot";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useeEffectCheckerHandler } from "../Context/Features/UserDataSlice";

const drawerWidth = 240;
function DrawerAppBar(props) {
  const dispatch = useDispatch();
  const FeedIconHandler = () => {
    dispatch(useeEffectCheckerHandler(false));
  };
  const theme = useTheme();
  const isSmallScreen640 = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen768 = useMediaQuery(theme.breakpoints.down("md"));
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pollpilot
      </Typography>
      <Divider />
      <List className="flex flex-col gap-3">
        <Link to={"/addpoll"}>
          <div className="hover:bg-[#000] hover:bg-opacity-5 mx-4 py-2 rounded cursor-pointer">
            Add New Poll
          </div>
        </Link>
        <Link to={"/dashboard"}>
          <div className="hover:bg-[#000] hover:bg-opacity-5 mx-4 py-2 rounded cursor-pointer">
            My Polls
          </div>
        </Link>
        <div className="hover:bg-[#000] hover:bg-opacity-5 mx-4 py-2 rounded cursor-pointer">
          About
        </div>
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ display: "" }}>
        <div className="flex flex-row px-3 bg-[#6974d8] py-3 justify-between sm:py-4 ">
          <div className="flex justify-center items-center gap-2">
            <MenuIcon
              sx={{
                fontSize: !isSmallScreen640 ? 35 : 25,
                display: !isSmallScreen768 && "none",
              }}
              className={isSmallScreen640 ? "hidden" : ""}
              onClick={handleDrawerToggle}
            />
            <Link to={"/dashboard"}>
              <div onClick={FeedIconHandler}>
                <BallotIcon sx={{ fontSize: !isSmallScreen640 ? 35 : 25 }} />
              </div>
            </Link>

            <Link to={"/addpoll"}>
              <Button
                sx={{
                  fontSize: 10,
                  display: isSmallScreen768 && "none",
                }}
                variant="contained"
              >
                Add Poll
              </Button>
            </Link>
            <Button
              sx={{
                fontSize: 10,
                display: isSmallScreen768 && "none",
              }}
              variant="contained"
            >
              My Polls
            </Button>
          </div>
          <div className="flex justify-center gap-2">
            <input
              className="rounded-[0.4rem] outline-none text-black indent-2 text-[0.7rem] w-52 sm:w-72 sm:h-9 sm:text-[1rem] md:w-[20rem] lg:w-[28rem]"
              type="text"
              placeholder="Search..."
            />
            <div className="bg-slate-800 rounded w-6 flex justify-center items-center sm:w-9 sm:h-9">
              <SearchIcon sx={{ fontSize: !isSmallScreen640 ? 20 : 15 }} />
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Button
              sx={{
                fontSize: 10,
                display: isSmallScreen768 && "none",
              }}
              variant="contained"
            >
              About
            </Button>
            <Link to={"/login"}>
              <div className="bg-[#423e3e] h-5 w-5 rounded-[50%] sm:w-8 sm:h-8"></div>
            </Link>
          </div>
        </div>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: isSmallScreen768 ? "block" : "none",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
