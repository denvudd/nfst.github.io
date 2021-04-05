document.addEventListener('DOMContentLoaded', () => {
  'use strict'; 
  const modal = () => {
    const cardDetailsButtonBuy = document.querySelector('.regist__button'); // получаем кнопку "Купить"
    const submitButton = document.querySelector('.submit');
    const modal = document.querySelector('.modal'); // получаем модальное окно    

    const escapeHandler = (event) => {
      if(event.code === "Escape") {
        modal.classList.remove('open');  
        document.body.classList.remove('overflowHidden');    
      }
    };

    const openModal = (event) => {
      const target = event.target;
      modal.classList.add('open'); // по клику добавляем клас open
      document.addEventListener('keydown', escapeHandler);
      document.body.classList.add('overflowHidden');
    };
    
    const closeModal = () => {
      modal.classList.remove('open');
      document.removeEventListener('keydown', escapeHandler); // убрать оброботчик событий после закрытия
      document.body.classList.remove('overflowHidden');
    };

    modal.addEventListener('click', (event) => {
      const target = event.target; // где был клик?
      if(target.classList.contains('modal__close') || target === modal) { // если нажатая кнопка имеет клас modal__close ИЛИ нажатая кнопка === modal
        closeModal();
      } 
    });

    cardDetailsButtonBuy.addEventListener('click', openModal);
    submitButton.addEventListener('click', closeModal);
  }

modal();
});


