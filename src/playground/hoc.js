//komponent wyższego poziomu:

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComonent) => {
    return (props) =>(
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComonent {...props} />
        </div>
    )
}
const requireAuthentication = (WrappedComonent) => {
    return (props) =>(
        <div>
            {props.isAuthenticated ? (
            <WrappedComonent {...props} />
            ) : (
                 <p>Please log in!</p>
            )}
        </div>
    )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));