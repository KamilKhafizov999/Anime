const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const playPauseBtn = document.getElementById('playPauseBtn');
const rewindBtn = document.getElementById('rewindBtn');
const fastForwardBtn = document.getElementById('fastForwardBtn');
const fullScreenBtn = document.getElementById('fullScreenBtn');
const pipBtn = document.getElementById('pipBtn');
const muteBtn = document.getElementById('muteBtn');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');
const volumeControl = document.getElementById('volumeControl');
const videoSelect = document.getElementById('videoSelect');
const controls = document.getElementById('controls');

let previousVolume = 1; // Хранить предыдущий уровень громкости
let isMuted = false; // Флаг для отслеживания состояния звука

// Воспроизведение/Пауза
playPauseBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        resetControlsTimeout();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Перемотка назад
rewindBtn.addEventListener('click', () => {
    videoPlayer.currentTime = Math.max(videoPlayer.currentTime - 10, 0);
});

// Перемотка вперед
fastForwardBtn.addEventListener('click', () => {
    videoPlayer.currentTime = Math.min(videoPlayer.currentTime + 10, videoPlayer.duration);
});

// Полноэкранный режим
fullScreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
        fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    } else {
        if (videoPlayerContainer.requestFullscreen) {
            videoPlayerContainer.requestFullscreen();
        } else if (videoPlayerContainer.mozRequestFullScreen) {
            videoPlayerContainer.mozRequestFullScreen();
        } else if (videoPlayerContainer.webkitRequestFullscreen) {
            videoPlayerContainer.webkitRequestFullscreen();
        } else if (videoPlayerContainer.msRequestFullscreen) {
            videoPlayerContainer.msRequestFullscreen();
        }
        fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
    }
});

// Переключение звука
muteBtn.addEventListener('dblclick', () => {
    if (isMuted) {
        videoPlayer.volume = previousVolume; // Возвращаем прежний уровень громкости
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        previousVolume = videoPlayer.volume; // Сохраняем текущий уровень громкости
        videoPlayer.volume = 0; // Отключаем звук
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
    isMuted = !isMuted;
});

// Режим "Картинка в картинке"
pipBtn.addEventListener('click', async () => {
    if (videoPlayer !== document.pictureInPictureElement) {
        try {
            await videoPlayer.requestPictureInPicture();
        } catch (error) {
            console.error(error);
        }
    } else {
        document.exitPictureInPicture();
    }
});

// Обновление прогресса
videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(videoPlayer.currentTime);
    const duration = Math.floor(videoPlayer.duration);
    currentTimeDisplay.textContent = formatTime(currentTime);
    totalTimeDisplay.textContent = formatTime(duration);

    const percentage = (currentTime / duration) * 100;
    progressBar.style.width = percentage + '%';
});

// Обновление времени при клике на прогресс
progressContainer.addEventListener('click', (event) => {
    const rect = progressContainer.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const totalWidth = rect.width;
    const percentage = offsetX / totalWidth;
    videoPlayer.currentTime = percentage * videoPlayer.duration;
});

// Форматирование времени
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

//// Обработчик изменения громкости
//volumeControl.addEventListener('input', () => {
//    videoPlayer.volume = volumeControl.value;
//    isMuted = false; // Убедимся, что звук не отключен
//    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>'; // Возвращаем кнопку в исходное состояние
//});

// Полноэкранный режим — изменение класса
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        videoPlayerContainer.classList.add('fullscreen');
        fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>'; // Изменяем иконку
        videoPlayer.style.height= 'auto'
    } else {
        videoPlayerContainer.classList.remove('fullscreen');
        fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>'; // Изменяем иконку
        videoPlayer.style.height = '320px'
    }
});

function changeVideo() {
    const selectElement = document.getElementById('videoSelect');
    const selectedValue = selectElement.value.split(',');
    const videoLink = selectedValue[0]; // Получаем ссылку на видео
    const previewImg = selectedValue[1]; // Получаем превью

    // Устанавливаем источник видео
    videoSource.src = videoLink;
    videoPlayer.poster = previewImg;
    videoPlayer.load(); // Загружаем новое видео
}

let controlsTimeout;
let isControlsVisible = false;

// Функция для показа управления
function showControls() {
    controls.style.display = 'flex'; // или другой тип отображения
    controls.style.opacity = '1';
    isControlsVisible = true;
    resetControlsTimeout(); // Сброс таймера, когда показываем управление
}

// Функция для скрытия управления
function hideControls() {
    setTimeout(() => {
        if (!isMouseOverVideo && !videoPlayer.paused) { // Проверяем, находится ли мышь над видео
            controls.style.opacity = '0';
            controls.style.display = 'none';
            isControlsVisible = false;
        }
    }, 300); // Задержка, чтобы анимация исчезновения была заметной
}

// Сброс таймера управления
function resetControlsTimeout() {
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(hideControls, 3000); // 3 секунды до скрытия
}

// Обработчики событий для движения мыши
videoPlayer.addEventListener('mousemove', () => {
    if (!isControlsVisible) {
        showControls(); // Показываем, если управление невидимо
    }
    resetControlsTimeout(); // Сбрасываем таймер при движении мыши
});

// Таймер для скрытия управления при загрузке видео
resetControlsTimeout(); // Запускаем таймер, когда видео загружается

// Обработчики входа/выхода мыши
let isMouseOverVideo = false;
videoPlayer.addEventListener('mouseover', () => {
    isMouseOverVideo = true;
    showControls(); // Показываем, когда мышь над видео
});

videoPlayer.addEventListener('mouseout', () => {
    if (!videoPlayer.paused) {
        isMouseOverVideo = false;
        resetControlsTimeout(); // Сбрасываем таймер при уходе мыши
    }
});

// Обработка нажатий клавиш
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Предотвращаем прокрутку страницы
        if (isControlsVisible) {
            hideControls(); // Скрываем управление
        } else {
            showControls(); // Показываем управление
        }
    }
    // Сброс таймера, если пользователь нажимает клавиши
    resetControlsTimeout();
});

const videoSelections = document.querySelectorAll('.video-selection');

videoSelections.forEach(selection => {
    selection.addEventListener('click', function () {
        videoSelections.forEach(sel => sel.classList.remove('active'));

        this.classList.add('active');

        const videoSrc = this.getAttribute('data-video-src');
        videoSource.src = videoSrc;

        videoPlayer.load();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const muteBtn = document.getElementById("muteBtn");
    const volumeSlider = document.getElementById("volumeSlider");

    muteBtn.addEventListener("click", function () {
        volumeSlider.classList.toggle("show");
    });
});

//function changePlayer(id) {
//    videoPlayer = document.getElementById("videoPlayer"+id);

//    document.getElementById("videoPlayer1").style.display = 'none';
//    document.getElementById("videoPlayer2").style.display = 'none';

//    videoPlayer.style.display = 'block';

//}
