import { AppBar, Toolbar } from "@mui/material";

export const TopBar: React.FC = () => {
  return (
    <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid #C7C7C7", bgcolor: "#fff" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar alt="Martin SM" src="" />
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              Martin SM
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
  );
}