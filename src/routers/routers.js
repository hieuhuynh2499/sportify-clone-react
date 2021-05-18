import Home from '../containers/home'
import Login from '../containers/login'
import Register from '../containers/register'
import Wellcome from '../containers/wellcome'
import LoginLayout from '../components/layout/wellcome'
const routes = [
  {
    path: '/home',
    component: Home,
    isAuthRoute: false,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    isAuthRoute: false,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    isAuthRoute: false,
    exact: true,
  },
  {
    path: '/',
    component: Wellcome,
    isAuthRoute: false,
    exact: true,
    layout: LoginLayout,
  },
]

export default routes