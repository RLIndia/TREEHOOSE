// (c) 2022 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.
//
// This AWS Content is provided subject to the terms of the AWS Customer Agreement
// available at http://aws.amazon.com/agreement or other written agreement between
// Customer and either Amazon Web Services, Inc. or Amazon Web Services EMEA SARL or both.

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './navbar.css';
import LogoImage from './RGLogo.png';

function Header() {
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <img src={LogoImage} alt="Logo" style={{ margin: '10px', height: '45px' }} />
                    <Typography variant="h5" color="inherit" style={{ flexGrow: 1, textAlign: 'center' }}>
                        SRE Data Egress Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;
