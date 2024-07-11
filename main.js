// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




// Add .hidden class to error modal when the page first loads
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('modal');
  if (errorModal) {
    errorModal.classList.add('hidden');
  }
});

// Function to simulate server call
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Adding click event listeners to all hearts
const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    if (heart.innerText === EMPTY_HEART) {
      // Empty heart was clicked, attempt to like it
      mimicServerCall()
        .then(() => {
          heart.innerText = FULL_HEART;
          heart.classList.add('activated-heart');
        })
        .catch(error => {
          const errorModal = document.getElementById('modal');
          const errorMessage = document.getElementById('modal-message');
          if (errorModal && errorMessage) {
            errorMessage.innerText = error;
            errorModal.classList.remove('hidden');
            setTimeout(() => {
              errorModal.classList.add('hidden');
            }, 3000);
          }
        });
    } else {
      // Full heart was clicked, unlike it
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  });
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
