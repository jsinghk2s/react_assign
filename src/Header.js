import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import App from "./App";

function Header() {
    return (
        <>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h10">
                        User Dashboard / Attendance
                        <br/>
                        <b>Attendance</b>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
