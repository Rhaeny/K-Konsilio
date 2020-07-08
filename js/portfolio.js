window.onload = function() {

    document.getElementById("categoryAll").style.boxShadow = "0 0 0 0.2rem rgba(255, 255, 255,.5)";

    document.getElementById("categoryAll").onclick = function () {
        clearAllButtons();
        document.getElementById("categoryAll").style.boxShadow = "0 0 0 0.2rem rgba(255, 255, 255,.5)";
        clearAllImages();
    };

    $('.open-popup-link').magnificPopup({
        key: '',
        type:'inline',
        midClick: true,
        gallery: {
            enabled: true
        },
    });

    function clearAllButtons() {
        document.getElementById("categoryAll").style.boxShadow = "";
        document.getElementById("category1").style.boxShadow = "";
        document.getElementById("category2").style.boxShadow = "";
        document.getElementById("category3").style.boxShadow = "";
        document.getElementById("category4").style.boxShadow = "";
    }

    function clearAllImages() {
        let items = document.getElementsByClassName("portfolio-image");
        for (let i=0; i < items.length; i++) {
            items[i].classList.remove("filtered");
        }
    }

    document.getElementById("category1").onclick = function () {
        clearAllButtons();
        document.getElementById("category1").style.boxShadow = "0 0 0 0.2rem rgba(255, 255, 255,.5)";
        clearAllImages();

        let items = document.getElementsByClassName("portfolio-image");
        for (let i=0; i < items.length; i++) {
            if (!items[i].classList.contains("portfolio-category1")) {
                items[i].classList.add("filtered");
        }
        }
    };

    document.getElementById("category2").onclick = function () {
        clearAllButtons();
        document.getElementById("category2").style.boxShadow = "0 0 0 0.2rem rgba(255, 255, 255,.5)";
        clearAllImages();

        let items = document.getElementsByClassName("portfolio-image");
        for (let i=0; i < items.length; i++) {
            if (!items[i].classList.contains("portfolio-category2")) {
                items[i].classList.add("filtered");
            }
        }
    };

    document.getElementById("category3").onclick = function () {
        clearAllButtons();
        document.getElementById("category3").style.boxShadow = "0 0 0 0.2rem rgba(255, 255, 255,.5)";
        clearAllImages();

        let items = document.getElementsByClassName("portfolio-image");
        for (let i=0; i < items.length; i++) {
            if (!items[i].classList.contains("portfolio-category3")) {
                items[i].classList.add("filtered");
            }
        }
    };

    document.getElementById("category4").onclick = function () {
        clearAllButtons();
        document.getElementById("category4").style.boxShadow = "0 0 0 0.2rem rgba(255, 255, 255,.5)";
        clearAllImages();

        let items = document.getElementsByClassName("portfolio-image");
        for (let i=0; i < items.length; i++) {
            if (!items[i].classList.contains("portfolio-category4")) {
                items[i].classList.add("filtered");
            }
        }
    };
};