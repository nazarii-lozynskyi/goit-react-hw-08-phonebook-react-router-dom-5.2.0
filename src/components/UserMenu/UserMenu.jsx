import { useDispatch, useSelector } from "react-redux";

import { authSelectors, authOperations } from "../../redux/auth";

import { Button, Box, Avatar } from "@mui/material";

import { Logout } from "@mui/icons-material";

import { deepOrange } from "@mui/material/colors";

function UserMenu() {
  const dispatch = useDispatch();
  //const name = useSelector(authSelectors.getUserName);

  //const capitalLetters = name
  //  .split(" ")
  //  .map((n) => n[0])
  //  .join("")
  //  .toUpperCase();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ bgcolor: deepOrange[500], marginRight: "5px" }}>{}</Avatar>
      <p>
        Welcome,
        <span
          style={{
            fontSize: "20px",
            fontStyle: "italic",
            fontVariantCaps: "small-caps",
            textDecoration: "underline",
            marginLeft: "10px",
          }}
        >
          {}
        </span>
      </p>

      <Button
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
        color="inherit"
        sx={{ p: "8px", marginTop: "8px", marginLeft: "20px" }}
      >
        Logout
        <Logout sx={{ marginLeft: "5px", width: "32px", height: "32px" }} />
      </Button>
    </Box>
  );
}

export default UserMenu;
