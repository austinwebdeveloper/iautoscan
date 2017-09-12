import React from 'react';

import Header from './header.js'
import Home from './home.js'
import Body from './Body.jsx'
import Signup from './signup.js'

class App extends React.Component {
    render() {
        return (
            <body>
            <div className="page text-center">
                <Header />
                <Home />

                <footer className="page-foot text-center section-angle-white">
                    <div className="shell"><span className="copyright reveal-inline-block">
                        Copyright © iAutoScan.com 2017.  All rights reserved.
                    </span></div>
                </footer>

            </div>
            </body>

        );
    }
}

export default App;