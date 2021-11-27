import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import Header from "../Header";

import { ContactPhone } from "@mui/icons-material";
import { Box, Toolbar, AppBar, Container, Icon } from "@mui/material";

export default function MyAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Icon color="inherit" sx={{ width: "60px", height: "60px" }}>
          <ContactPhone sx={{ width: "100%", height: "100%" }} />
        </Icon>

        <Header />

        <Container
          style={{
            maxWidth: "1650px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Navigation />
          </Box>

          <Box>
            <AuthNav />
          </Box>

          <Box>
            <UserMenu />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
