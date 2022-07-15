import { components } from '../views/components.js';

const changeView = (route) => {
  const container = document.getElementById('forms');
  container.innerHTML = '';
  // const slider = document.getElementById('slideCont');
  // slider.innerHTML = '';

  switch (route) {
    case '':
    case '#':
    case '#/':
    { return container.appendChild(components.LogIn()); }
    // case '#/bienvenida':
    // { return slider.appendChild(components.Welcome()); }
    // case '#/log-in':
    // { return container.appendChild(components.LogIn()); }
    case '#/sign-up':
    { return container.appendChild(components.SignUp()); }
    default: return 'hola';
  }
};
export { changeView };
