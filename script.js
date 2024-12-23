document.addEventListener("DOMContentLoaded", function () {
    const audioElements = document.querySelectorAll("audio");
    const circularCovers = document.querySelectorAll(".circular-cover");

    audioElements.forEach((audio, index) => {
        audio.addEventListener("play", () => {
            circularCovers[index].classList.add("spin");
        });

        audio.addEventListener("pause", () => {
            circularCovers[index].classList.remove("spin");
        });

        audio.addEventListener("ended", () => {
            circularCovers[index].classList.remove("spin");
        });
    });
});