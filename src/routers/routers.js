import Home from '../containers/home'
import Login from '../containers/login'
import Register from '../containers/register'
import Wellcome from '../containers/wellcome'
import LoginLayout from '../components/layout/wellcome'
import MainLayout from '../components/layout/main'
import YourPlayList from '../containers/yourplaylist'
import Search from '../containers/search'
const routes = [
  {
    path: '/yourplaylist',
    component: YourPlayList,
    isAuthRoute: false,
    exact: true,
    layout: MainLayout,
  },
  {
    path: '/search',
    component: Search,
    isAuthRoute: false,
    exact: true,
    layout: MainLayout,
  },
  {
    path: '/home',
    component: Home,
    isAuthRoute: false,
    exact: true,
    layout: MainLayout,
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