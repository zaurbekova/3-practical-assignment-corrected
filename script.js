const swiper = new Swiper('.swiper', {
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
 

  breakpoints: {
        768: {
            enabled: false,
        }
      },

      
});

document.querySelector('.brand-page').style.height = 'auto';

 const openButton = document.getElementById('openbutton');
 const menuList = document.querySelector('.menu-list');

  openButton.addEventListener('click', () => {
  menuList.classList.toggle('expanded');
  openButton.classList.toggle('rotated');

  if (menuList.classList.contains('expanded')) {
    openButton.querySelector('p').textContent = 'Скрыть';
    let arrow = openButton.querySelector('.open-button-icon');
    arrow.src = 'ic/icon-button2.svg';
  } else {
    openButton.querySelector('p').textContent = 'Показать все';
    let arrow = openButton.querySelector('.open-button-icon');
    arrow.src = 'ic/icon-button1.svg';
  }
}); 