/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function delayedFadeOut(div, range) {
  delay = getRandomInt(range)
  setTimeout(function(){
    fadeOut(div)
  }, getRandomInt(range))
}

function delayedFadeIn(div, range) {
  setTimeout(function(){
    fadeIn(div)
  }, 1000)
}

function fadeAllOut(el, group) {
  // Your solution here
  group.forEach(div => {
    if (div === el) {
      setTimeout(function(){
        fadeOut(div)
      }, 1000)
    } else {
      delayedFadeOut(div, 1000);
    }
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeIn(div)
  })
}
