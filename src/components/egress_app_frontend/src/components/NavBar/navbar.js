// (c) 2022 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.
//
// This AWS Content is provided subject to the terms of the AWS Customer Agreement
// available at http://aws.amazon.com/agreement or other written agreement between
// Customer and either Amazon Web Services, Inc. or Amazon Web Services EMEA SARL or both.

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Auth } from 'aws-amplify';
import './navbar.css';
import LogoImage from './RGLogo.png';

function NavBar() {
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <img src={LogoImage} alt="Logo" style={{ margin: '10px', height: '45px' }} /> {/* Add image here */}
                    <Typography variant="h5" color="inherit" style={{ flexGrow: 1 }}>
                        SRE Data Egress Application
                    </Typography>
                    <div slot="amplify-sign-out">
                        <Button color="warning" variant="contained" onClick={() => Auth.signOut()}>
                            Sign Out
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar;
