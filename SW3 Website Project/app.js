let isModalOpen1 = false;

function toggleModal1() {
    if (isModalOpen1) {
        isModalOpen1 = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen1 = true;
    document.body.classList += " modal--open";
}

let isModalOpen2 = false;

function toggleModal2() {
    if (isModalOpen2) {
        isModalOpen2 = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen2 = true;
    document.body.classList += " modal--open";
}