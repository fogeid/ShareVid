import { routes as initial } from '../views/home';
import { routes as login } from '../modules/auth';
import { routes as register } from '../views/system/register';
import { routes as dashboard } from '../views/system/dashboard';
import { routes as detail } from '../views/system/detail';
import { routes as following } from '../views/system/following';
import { routes as gallery } from '../views/system/gallery';
import { routes as profile } from '../views/system/profile';

export default [
  ...initial,
  ...login,
  ...register,
  ...dashboard,
  ...detail,
  ...following,
  ...gallery,
  ...profile
]
