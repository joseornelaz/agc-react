import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { Typography } from "../../atoms/Typography/Typography";
import DsSvgIcon from "../../atoms/Icon/Icon";
import { LeftCircle } from "../../../assets/icons";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

type TopBarProps = {
  isExternal?: boolean;
  onBack?: () => void;
};

export const TopBar: React.FC<TopBarProps> = ({isExternal, onBack}) => {

  return (
    <AppBar
        position="fixed"
        elevation={0}
        sx={{ borderBottom: "1px solid #C7C7C7", bgcolor: "#fff" }}
      >
        {
          isExternal ? (
            <Toolbar>
              <IconButton onClick={onBack}>
                <DsSvgIcon component={LeftCircle} color='primary' />
              </IconButton>
              <Typography component="h4" variant="h4" sxProps={{ ml: '2px' }}>
                Preguntas Frecuentes
              </Typography>
            </Toolbar>
          ) : (
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar alt="Martin SM" src="" width={48} height={48} />
                <Typography component="h4" variant="h4" sxProps={{ ml: 1 }}>
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
              </Box>
            </Toolbar>
          )
        }
      </AppBar>
  );
}