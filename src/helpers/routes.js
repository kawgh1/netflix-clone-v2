import React from "react";
import { Route, Redirect } from "react-router-dom";

// Example code from app.js impl

/* <Router>
    <Switch>
        <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
        >
            <Signin />
        </IsUserRedirect>

        <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
        >
            <Signup />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
        </ProtectedRoute>

        <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
        >
            <Home />
        </IsUserRedirect>

    </Switch>
</Router>; */

// here the 'children' is essentially whatever page
// (and their children) the user is trying to access
// for example <Signin />
// Reminder - IsUserRedirect is ONLY for non-protected resources
// so returning children of the page a non-user is trying to access is ok
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children;
                }

                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}

export function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: "signin",
                                state: { from: location },
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}
