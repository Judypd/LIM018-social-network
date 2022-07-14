export default () => {
  const welcomeView = `
  <div id="slides" class="slides">
      <input type="radio" class="radiobutton" id="radiobutton1" name="slidesbtn">
      <input type="radio" class="radiobutton" id="radiobutton2" name="slidesbtn">
    </div>

    <div id="first-slide" class="slides">
      <h3 class="titles">THE SOCIAL FOOD</h3>
      <img src="../images/slide-1.jpeg" class="imagesSlide" alt="pulpo">
    </div>

    <div id="second-slide" class="slides">
      <h3 class="titles">THE SOCIAL FOOD</h3>
      <img src="../images/slides-2.jpeg" class="imagesSlide" alt="bocaditos">
    </div>

    <div id="navigation-auto" class="navigation-auto">
      <div id="auto-btn1" class="auto-btn1"></div>
      <div id="auto-btn2" class="auto-btn2"></div>
    </div>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = welcomeView;

  return divElement;
};
