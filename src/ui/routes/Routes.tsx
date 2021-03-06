import React from "react";
import Error404 from "../common/Eror404";
import { Route, Switch, Redirect } from "react-router-dom";
import Start from "../common/Start";
import Currency from "../common/Currency/Currency";
import Charts from "../common/Charts/Charts";
import Exchange from "../common/Exchange/Exchange";




export const PATH = {
    START: "/start",
    EXCHANGE: "/exchange",
    CHARTS: "/charts",
    CURRENCY: "/currency"
}

function Routes() {
    return (
        <div>

          <Switch>
            <Route path={"/"} exact render={() => <Redirect to={PATH.START}/>}/>

            <Route path={PATH.START} render={() => <Start/>}/>
            <Route path={PATH.EXCHANGE} render={() => <Exchange/>}/>
            <Route path={PATH.CHARTS} render={() => <Charts/>}/>
            <Route path={PATH.CURRENCY} render={() => <Currency/>}/>

            <Route render={() => <Error404/>}/>

          </Switch>
        </div>
    );
}

export default Routes;
