window.addEventListener(`keydown`, function (e) {
    console.log(e);
    const aud = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(aud);
    console.log(key);
    key.classList.add(`playing`)
    if (!aud){return} //stops the func from 
    aud.currentTime = 0;
    aud.play()
})

function removetransition(e ){
    if (e.propertyName != `transform`) {return}
    this.classList.remove(`playing`)
}
const keys = document.querySelectorAll(`.key`)
keys.forEach(key => {
    key.addEventListener(`transitionend`, removetransition)
});
