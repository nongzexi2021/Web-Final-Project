import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'Stock'
    }) => {

    return (
        <>
            <div className="list-group">
                <Link to="/" className={`list-group-item
            ${active === 'Your Store' ? 'active' : ''} border border-secondary`}>
                    <span className="d-none d-xl-inline">Your Store</span>
                </Link>

                <Link to="/" className={`list-group-item
            ${active === 'Stock' ? 'active' : ''} border border-secondary`}>
                    <span className="d-none d-xl-inline">Stock</span>
                </Link>

                <Link to="/" className={`list-group-item
            ${active === 'order' ? 'active' : ''} border border-secondary`}>
                    <span className="d-none d-xl-inline">Order</span>
                </Link>

                <Link to="/a6/twitter/notification" className={`list-group-item
            ${active === 'Message' ? 'active' : ''} border border-secondary`}>
                    <span className="d-none d-xl-inline">Message</span>
                </Link>

                <Link to="/a6/twitter/message" className={`list-group-item
            ${active === 'Privacy' ? 'active' : ''} border border-secondary`}>
                    <span className="d-none d-xl-inline">Privacy</span>
                </Link>

                <Link to="/a6/twitter/bookmark" className={`list-group-item
            ${active === 'Support' ? 'active' : ''} border border-secondary`}>
                    <span className="d-none d-xl-inline">Support</span>
                </Link>
            </div>

        </>
    );
}
export default NavigationSidebar;
