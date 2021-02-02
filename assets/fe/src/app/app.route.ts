import { PUBLIC_ROUTES } from './components/public/public.route';
import { USERS_ROUTES } from './components/users/users.route';

export const APP_ROUTES = {
  otherwise: '/login',
  states: ([] as Object[]).concat(
    PUBLIC_ROUTES,
    USERS_ROUTES
  )
}