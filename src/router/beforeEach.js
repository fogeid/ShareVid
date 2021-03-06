import store from '../store';

export default async (to, from, next) => {
  document.title = `${to.name} - ShareVid`;

  if (to.name !== 'login' && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/ActionCheckToken');

      next({ path: to.path });
    } catch (err) {
      next({ name: 'login' });
    }
  } else {
    if (to.name === 'login' && store.getters['auth/hasToken']) {
      next({ name: 'dashboard' });
    } else {
      next();
    }
  }
}