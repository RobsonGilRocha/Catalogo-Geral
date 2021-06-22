import {Route,Switch,Redirect } from 'react-router-dom'
import Login from '../pages/Login/Index'
import List from '../pages/List/index'

function Routes() {
    return (
        <Switch>
            <Redirect from='/' to="/login" exact />
            <Route path='/login' component={Login} exact />
            <Route path='/list' component={List} exact />
        </Switch>
    )
}
export default Routes;