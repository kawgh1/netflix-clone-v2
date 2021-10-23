import React from "react";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";
import { FaqsContainer } from "./containers/faqs";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
    const { user } = useAuthListener();
    // console.log(user);

    return (
        // first
        // <>
        //     <JumbotronContainer />
        //     <FaqsContainer />
        //     <FooterContainer />
        // </>

        // then
        // <Router>
        //     <Route exact path={ROUTES.HOME}>
        //         <Home />
        //     </Route>
        //     <Route exact path={ROUTES.SIGN_IN}>
        //         <Signin />
        //     </Route>
        //     <Route exact path={ROUTES.SIGN_UP}>
        //         <Signup />
        //     </Route>
        //     <Route exact path={ROUTES.BROWSE}>
        //         <Browse />
        //     </Route>
        // </Router>

        <Router>
            <Switch>
                {/*  */}
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.SIGN_IN}
                >
                    <Signin />
                </IsUserRedirect>
                {/*  */}
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.SIGN_UP}
                >
                    <Signup />
                </IsUserRedirect>
                {/*  */}
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>
                {/*  */}
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.HOME}
                >
                    <Home />
                </IsUserRedirect>
                {/*  */}
            </Switch>
        </Router>
    );
}
