export default () => {
  const viewSignup = `
  <div class="containerForm">
    <h1 class="titles"> THE SOCIAL FOOD </h1>
      <form class="view">
        <input type="text" placeholder="Nombre y Apellidos" id="userName" class="signUpResgister">
        <br>
        <input type="email" placeholder="Correo electrónico" id="email" class="signUpResgister">
        <br>
        <input type="password" placeholder="Contraseña" id="userPassword" value=""  class="signUpResgister">
        <br>
        <button type="button" id="submitSingUp" class="buttonsForm" value="Sign Up">Sign Up</button>
      </form>
      <br>
      <h3>¿Tienes cuenta?<span><a href="#/log-in">Entrar</a></span></h3>
  </div>`;

  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'backgroundImage');
  divElement.innerHTML = viewSignup;

  return divElement;
};
