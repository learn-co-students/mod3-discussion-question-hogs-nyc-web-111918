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
// var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
// var timeoutID = scope.setTimeout(function[, delay]);
// var timeoutID = scope.setTimeout(code[, delay]);

function delayedFadeOut(div, range) {
  setTimeout(() => {
    fadeOut(div)
    // console.log(range, 'delayedFadeOut Completed')
  }, range)
}

function delayedFadeIn(div, range) {
  setTimeout(() => {
    fadeIn(div)
    // console.log(range, 'delayedFadeIn Completed')
  }, range)
}

function fadeAllOut(el, group) {
  // console.log('fadeAllOut begins')
  // console.log(group)
  group.forEach(div => {
    if (div == el) {
      delayedFadeOut(div, LONGRANGE)
    } else {
      delayedFadeOut(div, SHORTRANGE * Math.random())
    }
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
      delayedFadeIn(div, SHORTRANGE * Math.random())
  })
}
