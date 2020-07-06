$(document).ready(function () {
    $('.slider').bxSlider({
        mode: 'horizontal',
        infiniteLoop: false,        // 무한루프 X
        hideControlOnEnd: true,     // 맨 앞에서 앞으로, 맨 뒤에서 뒤로 이동 불가
    });
});