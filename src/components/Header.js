import { Fragment, useState } from "react";
import {
  AppBar,
  IconButton,
  Avatar,
  Popover,
  List,
  ListSubheader,
  ListItemButton,
} from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";
import AuthModal from "./AuthModal";
import { useAuth } from "../contexts/AuthContext";
import SearchBtn from "./SearchButton";

export default function Header() {
  const { isLoggedIn, account, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const [popover, setPopover] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [register, setRegister] = useState(false);

  const openPopover = (e) => {
    setPopover(true);
    setAnchorEl(e.currentTarget);
  };

  const closePopover = () => {
    setPopover(false);
    setAnchorEl(null);
  };

  const clickLogin = () => {
    setRegister(false);
    setAuthModal(true);
    closePopover();
  };

  const clickRegister = () => {
    setRegister(true);
    setAuthModal(true);
    closePopover();
  };

  return (
    <AppBar className="header" position="static">
      <img className="img-logo-inicio" src="https://firebasestorage.googleapis.com/v0/b/cinea-ninjasdev.appspot.com/o/Logotipos%2Flogo%20cinema%203.png?alt=media&token=f4ba902b-cda7-4393-978c-32169b3a6259&_gl=1*h6qtn9*_ga*MTQ1MDA0MTE5OC4xNjk3NzU4OTU2*_ga_CW55HF8NVT*MTY5ODg5MTg5My42LjEuMTY5ODg5MjI4MC40MC4wLjA."></img>
      
       {isLoggedIn ? (
            <Fragment>
               <SearchBtn/>
            </Fragment>
         
            
          ) : (
            <Fragment>
              <h1>Barra desactivada</h1>
            </Fragment>
          )}
      <IconButton onClick={openPopover}>
        <OnlineIndicator online={isLoggedIn}>
          <Avatar src={account?.username || ""} alt={account?.username || ""} />
        </OnlineIndicator>
      </IconButton>

      <Popover
        anchorEl={anchorEl}
        open={popover}
        onClose={closePopover}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <List style={{ minWidth: "200px"}}>
        
          <ListSubheader >
            Hola, {isLoggedIn ? account.username : "Invitado"}
          </ListSubheader>

          {isLoggedIn ? (
            <Fragment>
               <ListSubheader >
                Rol: {isLoggedIn ? account.role: ""}
               </ListSubheader>
              <ListItemButton onClick={logout}>Logout</ListItemButton>
            </Fragment>
         
            
          ) : (
            <Fragment>
              <ListItemButton onClick={clickLogin}>Iniciar Sesion</ListItemButton>
              <ListItemButton onClick={clickRegister}>Reigistrarse</ListItemButton>
            </Fragment>
          )}
        </List>
      </Popover>

      <AuthModal
        open={authModal}
        close={() => setAuthModal(false)}
        isRegisterMode={register}
        toggleRegister={() => setRegister((prev) => !prev)}
      />
    </AppBar>
  );
}
