  // __________________________________ Videos Hover __________________________ //

$(document).ready(function(){
  $(`.video`).hover(
    function(){$(this).get(0).play(), $(this).attr('controls', true), $(this).css({"transform": "scale(1.5)"})},
    function(){$(this).get(0).pause(), $(this).attr('controls', false), $(this).css({"transform": "scale(1)"})}
    )

  $(`button`).hover(
    function(){$(this).css({"transform": "scale(1.1)", "text-shadow": "0px 0px 5px var(--contrast-color)"})},
    function(){$(this).css({"transform": "scale(1)", "text-shadow": "0px 0px 0px var(--contrast-color)"})}
    )
})


  // ______________________________ Apply fixed Header ________________________ //

window.onscroll = function(){applyHeaderBg()}

const header = document.getElementById(`header-container`)
const sticky = header.offsetTop

function applyHeaderBg(){
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    $('.portal').css({"transform": "scale(1)"});
    $('.portal-videos').css({"transform": "scale(1)"})
  } else {
    header.classList.remove("sticky");
    $('.portal').css({"transform": "scale(0.1)"});
    $('.portal-videos').css({"transform": "scale(0.1)"})
  }
}

  // ___________________________ Slide 100px lower ________________________ //

window.setTimeout(offsetAnchor, 0);

$(document).on('click', 'a[href^="#"]', function(event) {
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 140);
  }
}

  // _____________________________ Login Trasition ___________________________ //


document.querySelector('.background-exit').addEventListener('click', closeLogin)
document.querySelector('.signup-now').addEventListener('click', switchToRegister)
document.querySelector('.login-now').addEventListener('click', switchToLogin)


function switchToRegister(){
  $('.forms-container').css({"transform": "rotate3d(0, 1, 0, 90deg)"})
  setTimeout(applyHiddenLogin, 400)
  setTimeout(removeHiddenRegister, 400)
  setTimeout(rotateCardBack, 400)
}

function switchToLogin(){
  $('.forms-container').css({"transform": "rotate3d(0, 1, 0, 90deg)"})
  setTimeout(applyHiddenRegister, 400)
  setTimeout(removeHiddenLogin, 400)
  setTimeout(rotateLoginBack, 400)
}

function openLogin(){
  $('.login-container').removeClass('hidden')
  setTimeout(slideFromRight, 1) 
}

function closeLogin(){
  setTimeout(slideToRight, 1)
  setTimeout(applyHiddenAll, 100)
  applyHiddenRegister()
  removeHiddenLogin()
}

function rotateCardBack(){
  $('.forms-container').css({"transform": "rotate3d(0, 1, 0, 0.001deg)"})
  console.log('girou a carta')
}

function rotateLoginBack(){
  $('.forms-container').css({"transform": "rotate3d(0, 1, 0, 0.001deg)"})
  console.log('girou a carta')
}


function applyHiddenAll(){
  $('.login-container').addClass('hidden')
}
function applyHiddenLogin(){
  $('.login').addClass('hidden')
}
function applyHiddenRegister(){
  $('.register').addClass('hidden')
}


function removeHiddenAll(){
  $('.login-container').removeClass('hidden')
}
function removeHiddenLogin(){
  $('.login').removeClass('hidden')
}
function removeHiddenRegister(){
  $('.register').removeClass('hidden')
}


function slideFromRight(){
  $('.forms-container').css({"transform":"translateX(0)"})
}
function slideToRight(){
  $('.forms-container').css({"transform":"translateX(500%)"})
}
 

  // __________________________ Open/Close Aside Menu _____________________ //

$('.games').on("click", function(){
  setTimeout(slideDown, 1)
  console.log('click funcionando')
})

function slideDown(){
  $('.games-tab').css({"transform": "translateY(0%)"})
  $('.games-tab').removeClass('hidden')
  
}


// let arrayTeste = [1, 2, 3, 4]
// let arrayReceiver = []

// function invert(){
//   for (numberGotten of arrayTeste){
//     arrayReceiver.splice(0, 0, numberGotten)
//   }
// }
// invert()

// let array = [1, 2, 3]
// let receiver = array.map(parametro => {
//   return parametro*2
// })
// console.log(receiver)



// console.log(header)
// function headerSticky(){
//   if (window.pageYOffset > sticky){
//     header.classList.add('sticky')
//   }
// }



function testButton(){
  $('.video').attr('controls', true)
}









































