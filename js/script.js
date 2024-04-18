// Плавное появление блоков

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.block');
for (let elm of elements) {
  observer.observe(elm);
}


// document.addEventListener("DOMContentLoaded", function() {
//   const slides = document.querySelectorAll(".slide");
//   const pagination = document.querySelector(".pagination");

//   slides.forEach((slide, index) => {
//     const button = document.createElement("button");
//     button.addEventListener("click", () => {
//       goToSlide(index);
//     });
//     pagination.appendChild(button);
//   });

//   function goToSlide(index) {
//     const slider = document.querySelector('.slider');
//     slider.style.transform = `translateX(-${index * 100}%)`;
//     const buttons = document.querySelectorAll(".pagination button");
//     buttons.forEach((button, i) => {
//       if (i === index) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     });
//   }
// });

// Слайдер

function goToSlide(index) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${index * 100}%)`;

    const buttons = document.querySelectorAll(".pagination button");
    buttons.forEach((button, i) => {
        if (i === index) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const pagination = document.querySelector(".pagination");

    slides.forEach((slide, index) => {
        const button = document.createElement("button");
        button.addEventListener("click", () => {
            goToSlide(index);
        });
        pagination.appendChild(button);
    });

    // При загрузке страницы активируйте первый слайд
    goToSlide(0);
});

// Подписка

document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  let email = document.getElementById("email").value;
  // Here you can add code to send the email to your backend for processing
  
  // For the sake of this example, let's just display a message
  let messageDiv = document.getElementById("message");
  messageDiv.innerHTML = "Вы успешно подписались на рассылку!";
  messageDiv.style.display = 'flex';
  messageDiv.style.color = "green";
});
document.addEventListener("click", function() {
  var messageDiv = document.getElementById("message");
  messageDiv.innerHTML = ""; // Очищаем содержимое сообщения
  messageDiv.style.display = 'none';
});

