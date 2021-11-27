import { useDispatch, useSelector } from "react-redux";

import { authSelectors, authOperations } from "../../redux/auth";

import { Button } from "@mui/material";

import { Logout } from "@mui/icons-material";

function UserMenu() {
  //const dispatch = useDispatch();
  //const name = useSelector(state => authSelectors.getUsername);

  //const capitalLetters = name
  //  .split(' ')
  //  .map(n => n[0])
  //  .join('')
  //  .toUpperCase();

  return (
    <>
      <Button
        //onClick={() => dispatch(authOperations.logOut())}
        type="button"
        color="inherit"
        sx={{ p: "8px", marginTop: "8px" }}
      >
        Logout
        <Logout sx={{ marginLeft: "5px", width: "32px", height: "32px" }} />
      </Button>
    </>
  );
}

export default UserMenu;
