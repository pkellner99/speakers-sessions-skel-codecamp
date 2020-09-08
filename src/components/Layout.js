import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <div className="container">
                <a href="/">Header</a>
            </div>
            <div>{children}</div>
        </>
    );
};

export default Layout;
