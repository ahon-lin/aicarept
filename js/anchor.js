document.addEventListener("DOMContentLoaded", function () {
    const scrollTo = window.location.hash.substr(1); // 获取 URL 中的 #后面的内容
    const targetElement = document.querySelector(`[data-scroll-to="${scrollTo}"]`);
    
    if (targetElement) {
        targetElement.scrollIntoView();
    }
});