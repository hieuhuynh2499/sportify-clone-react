import Home from '../containers/home'
import Login from '../containers/login'
import Register from '../containers/register'
import Wellcome from '../containers/wellcome'
import LoginLayout from '../components/layout/wellcome'
import MainLayout from '../components/layout/main'
import YourPlayList from '../containers/yourplaylist'
import Search from '../containers/search'
import PlayList from '../containers/playlist'
import ListFavourite from '../containers/listfavorite'
const routes = [
  {
    path: '/yourplaylist',
    component: YourPlayList,
    isAuthRoute: false,
    exact: true,
    layout: MainLayout,
  },
  {
    path: '/list-favorite',
    component: ListFavourite,
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
    path: '/play-list',
    component: PlayList,
    isAuthRoute: false,
    exact: true,
    layout: MainLayout,
  },
  {
    path: '/',
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
    path: '/wellcome',
    component: Wellcome,
    isAuthRoute: false,
    exact: true,
    layout: LoginLayout,
  },
]

export default routes