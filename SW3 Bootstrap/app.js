function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }

  let isModalOpen = false;

  function contact(event) {
      event.preventDefault();
      const loading = document.querySelector('.modal__overlay--loading');
      const success = document.querySelector('.modal__overlay--success');
      loading.classList += " modal__overlay--visible"
  
      // emailjs
      //     .sendForm(
      //         "service_a32uvxl",
      //         "template_i552roh",
      //         event.target,
      //         "dSlgm8_3vYYWH9niU"
      //     ).then(() => {
      //         loading.classList.remove("modal__overlay--visible");
      //         success.classList += " modal__overlay--visible";
      //     }).catch(() => {
      //         loading.classList.remove("modal__overlay--visible");
      //         alert(
      //             "The email service is temporarily unavailable. Please contact me at davidmuir1999@gmail.com"
      //         );
      //     })
  
      setTimeout(() => {
          loading.classList.remove("modal__overlay--visible")
          success.classList += " modal__overlay--visible"
          console.log('it worked')
      },1500);
  }
  
  
  function toggleModal() {
      if (isModalOpen) {
          isModalOpen = false;
          return document.body.classList.remove("modal--open");
      }
      isModalOpen = true;
      document.body.classList += " modal--open";
  }