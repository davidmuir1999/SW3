let isModalOpen = false;
let isModalOpen1 = false;
let isModalOpen2 = false;

function toggleModal1() {
    if (isModalOpen1) {
        isModalOpen1 = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen1 = true;
    document.body.classList += " modal--open";
}

function toggleModal2() {
    if (isModalOpen2) {
        isModalOpen2 = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen2 = true;
    document.body.classList += " modal--open";
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            "service_a32uvxl",
            "template_i552roh",
            event.target,
            "dSlgm8_3vYYWH9niU"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me at davidmuir1999@gmail.com"
            );
        })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}