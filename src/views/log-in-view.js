export default () => {
  const viewLogin = `
  <div class="containerForm">
    <div class="view">
      <h1 class="titles"> THE SOCIAL FOOD </h1>
      <form class="view">
        <input type="email" placeholder="Email" id="userEmail" class="emailPassword">
        <br>
        <input type="password" placeholder="Contraseña" id="password" class="emailPassword" value="">
        <br>
        <input type="submit" id="submit" class="buttonsForm" value="Log In">
      </form>
        <br>
        <p class="text">o</p>
        <br>
        <button type="button" id="gmailLogIn">Log In with gmail</button>
        <br>
        <h3>Si no tienes cuenta, crea una <span><a href="#/sign-up">aquí</a></span></h3>
    </div>
  </div>  `;

  const divElement = document.createElement('div');
  // divElement.setAttribute('class', 'backgroundImage');
  divElement.innerHTML = viewLogin;

  return divElement;
};
