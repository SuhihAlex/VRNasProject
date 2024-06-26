"use strict"

document.addEventListener('DOMContentLoaded', function() {
    let video = document.getElementById('myVideo');
    let playPauseButton = document.getElementById('playPauseButton');
    let heroOverlay = document.getElementById('heroOverlay');

    playPauseButton.addEventListener('click', function() {
        if (video.paused || video.ended) {
            video.play();
            playPauseButton.textContent = "Pause";
        } else {
            video.pause();
            playPauseButton.textContent = "Play";
        }
    });

    video.addEventListener('click', function() {
        if (video.paused || video.ended) {
            video.play();
            playPauseButton.textContent = "Pause";
        } else {
            video.pause();
            playPauseButton.textContent = "Play";
        }
    });

    video.addEventListener('play', function() {
        playPauseButton.classList.add('hidden');
        heroOverlay.style.display = 'none';
    });

    video.addEventListener('pause', function() {
        playPauseButton.classList.remove('hidden');
        // playPauseButton.textContent = "Play";
        heroOverlay.style.display = 'block';
    });

    video.addEventListener('ended', function() {
        playPauseButton.classList.remove('hidden');
        // playPauseButton.textContent = "Play";
        heroOverlay.style.display = 'block';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let video = document.getElementById('chooseVideo');
    let playPauseButton = document.getElementById('choosePlayPauseButton');
    let aboutOverlay = document.getElementById('chooseOverlay');

    playPauseButton.addEventListener('click', function() {
        if (video.paused || video.ended) {
            video.play();
            playPauseButton.textContent = "Pause";
        } else {
            video.pause();
            playPauseButton.textContent = "Play";
        }
    });

    video.addEventListener('click', function() {
        if (video.paused || video.ended) {
            video.play();
            playPauseButton.textContent = "Pause";
        } else {
            video.pause();
            playPauseButton.textContent = "Play";
        }
    });

    video.addEventListener('play', function() {
        playPauseButton.classList.add('hidden');
        aboutOverlay.style.display = 'none';
    });

    video.addEventListener('pause', function() {
        playPauseButton.classList.remove('hidden');
        // playPauseButton.textContent = "Play";
        aboutOverlay.style.display = 'block';
    });

    video.addEventListener('ended', function() {
        playPauseButton.classList.remove('hidden');
        // playPauseButton.textContent = "Play";
        aboutOverlay.style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const currentlyActiveHeader = document.querySelector(".accordion-header.active");
            const accordionContent = header.nextElementSibling;

            if (currentlyActiveHeader && currentlyActiveHeader !== header) {
                currentlyActiveHeader.classList.remove("active");
                currentlyActiveHeader.nextElementSibling.style.maxHeight = 0;
            }

            header.classList.toggle("active");
            if (header.classList.contains("active")) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const faqAccordionHeaders = document.querySelectorAll(".faq-section__accordion-header");

    faqAccordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const faqCurrentlyActiveHeader = document.querySelector(".faq-section__accordion-header.active");
            const faqAccordionContent = header.nextElementSibling;

            if (faqCurrentlyActiveHeader && faqCurrentlyActiveHeader !== header) {
                faqCurrentlyActiveHeader.classList.remove("active");
                faqCurrentlyActiveHeader.nextElementSibling.style.maxHeight = 0;
            }

            header.classList.toggle("active");
            if (header.classList.contains("active")) {
                faqAccordionContent.style.maxHeight = faqAccordionContent.scrollHeight + "px";
            } else {
                faqAccordionContent.style.maxHeight = 0;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const playPauseButton = document.getElementById("play-pause");
    const playPauseCenterButton = document.getElementById("play-pause-center");
    const progress = document.getElementById("progress");
    const time = document.getElementById("time");
    const videoContent = document.getElementById("videoContent");

    const playIcon = "../img/play-button-small.svg";

    // Play or pause the video
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = "pause";
            videoContent.style.display = "none"; 
        } else {
            video.pause();
            playPauseButton.innerHTML = `<img src="${playIcon}" alt="Play">`;
            videoContent.style.display = "block";
        }
    }

    playPauseButton.addEventListener("click", togglePlayPause);

    // Update the progress bar and time indicator
    video.addEventListener("timeupdate", function() {
        const currentTime = video.currentTime;
        const duration = video.duration;

        progress.value = (currentTime / duration) * 100;

        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);

        time.textContent = 
            `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds} / 
             ${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
    });

    // Seek the video
    progress.addEventListener("input", function() {
        const duration = video.duration;
        video.currentTime = (progress.value / 100) * duration;
    });

    // Show the center play button when the video ends
    video.addEventListener("ended", function() {
        playPauseButton.innerHTML = `<img src="${playIcon}" alt="Play">`;
        videoContent.style.display = "block";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    showSlide(currentIndex);
});


 document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем отправку формы по умолчанию
            let email = document.getElementById('email').value;
            let messageDiv = document.getElementById('message');

            // Здесь вы можете добавить код для отправки данных на сервер или подписки на Telegram канал

            // Выводим сообщение об успешной подписке
            messageDiv.textContent = "Thank you for subscribing! We've sent a confirmation to " + email;
            messageDiv.style.color = 'green';

            // Очищаем форму
            document.getElementById('subscriptionForm').reset();
});