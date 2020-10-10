import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '10px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontWeight: 1000
  },
  buttonText:{
    fontWeight:600,
  }
}));

function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "black",padding:"10px" }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            COVID-19
          </Typography>
          {auth && (
            <div>
              <Button variant="text" size="large" color="inherit">
              <Typography variant="h6" className={classes.buttonText}><NavLink style={{color:'white',textDecoration:'none'}} to="/">World Stats</NavLink></Typography>
              </Button>
              <Button
                size="large"  
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography variant="h6" className={classes.buttonText}>Charts</Typography>
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><NavLink to="/charts"><Typography style={{color:'black',textDecoration:'none'}} >Countries</Typography></NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/compare"><Typography style={{color:'black',textDecoration:'none'}} >Compare Countries</Typography></NavLink></MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar
