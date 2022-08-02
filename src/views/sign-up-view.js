// eslint-disable-next-line import/no-unresolved
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { registerWithEmail } from '../lib/index.js';
import { dataBase, signUpWithGmail, emailVerification } from '../firebase/firebaseConfig.js';

export const createSignUpView = () => {
  const viewSignup = `
  <div class='containerForm'>
    <div class='view'>
      <h1 class='titles'> THE SOCIAL FOOD </h1>
        <form>
          <input type='text' placeholder='Nombre de Usuario' id='userName' class="registerInputs">
          <br>
          <input type='email' placeholder='Correo electrónico' id='email' class="registerInputs">
          <br>
          <input type='password' placeholder='Contraseña' id='userPassword' value='' class="registerInputs">
          <br>
          <button type='button' id='submitSingUp' class='buttonsForm' value='Sign Up'>Sign Up</button>
        </form>
        <div id='eMessage'></div>
        <img src="./images/google-logo.png" id="gmailSignIn" class='googleImage'>
        <p>Con Google</p>
        <h3>¿Tienes cuenta?<span><a href='#/log-in'>  Entrar</a></span></h3>
    </div>
    <div class='modalContainer'>
      <div class='modal'>
        <img src='./images/verification-email.jpg'>
        <p>Se envió un código de verificación a su correo electrónico</p>
        <button class='modalButton'>Aceptar</button>
      </div>
    </div>    
  </div>`;

  const sectionElement = document.createElement('section');
  sectionElement.setAttribute('class', 'backgroundImage');
  sectionElement.innerHTML = viewSignup;

  return sectionElement;
};

export const createBehaviorSignUpView = () => {
  const userEmail = document.querySelector('#email');
  const userPassword = document.querySelector('#userPassword');
  const eMessage = document.querySelector('#eMessage');
  const submitButton = document.querySelector('#submitSingUp');
  const gmailButton = document.querySelector('#gmailSignIn');
  const modalContainer = document.querySelector('.modalContainer');
  const closeModal = document.querySelector('.modalButton');

  submitButton.addEventListener('click', () => {
    registerWithEmail(userEmail.value, userPassword.value)
      .then(async (result) => {
        emailVerification().then(() => {
          modalContainer.classList.add('reveilModal');
        });
        const userCredential = result.user;
        try {
          // pasarle al objeto todos los campos que le estamos pidiendo (opcional)
          const docRef = await addDoc(collection(dataBase, 'usuarios'), {
            email: userCredential.email,
            uid: userCredential.uid,
          });
          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      }).catch((error) => {
        const errorM = error.message;
        eMessage.setAttribute('class', 'errorMessage');
        console.log(errorM);
        switch (errorM) {
          case 'Firebase: Error (auth/invalid-email).': {
            eMessage.textContent = 'Debe ingresar un correo electrónico válido';
            break;
          }
          case 'Firebase: Password should be at least 6 characters (auth/weak-password).': {
            eMessage.textContent = 'La contraseña debe tener como mínimo 6 caracteres';
            break;
          }
          case 'Firebase: Error (auth/email-already-in-use).': {
            eMessage.textContent = 'El correo electrónico ya está siendo usado';
            break;
          }
          default: errorM.textContent = '';
            break;
        }
      });

    closeModal.addEventListener('click', () => {
      modalContainer.classList.remove('reveilModal');
      window.location.href = '#/log-in';
    });
  });

  gmailButton.addEventListener('click', () => {
    signUpWithGmail().then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // The signed-in user info.
      const user = result.user;
      // eslint-disable-next-line no-console
      console.log(user);
      // redireccionar y ruteo
      window.location.href = '#/log-in';
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // eslint-disable-next-line no-console
      console.log(errorMessage, email);
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  });
};
