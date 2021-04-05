 const accordion = () => {
    const characteristicsListElem = document.querySelector('.questions-list');
    const characteristicsItemElem = document.querySelectorAll('.questions__item'); 

    characteristicsItemElem.forEach((elem) => {
      if (elem.children[1].classList.contains('active')) {
        elem.children[1].style.height = elem.children[1].scrollHeight + 'px';  
      }
    })
    

    const open = (button, dropDown) => {
      closeAllDrops(button, dropDown); 
      dropDown.style.height = dropDown.scrollHeight + 'px'; 
      button.classList.add('active');
      dropDown.classList.add('active');
    };


    const close = (button, dropDown) => {
      button.classList.remove('active');
      dropDown.classList.remove('active');
      dropDown.style.height = ''; 
    };

  
    const closeAllDrops = (button, dropDown) => {
      characteristicsItemElem.forEach((elem) => { 
          close(elem.children[0], elem.children[1]);
      });   
    }


    characteristicsListElem.addEventListener('click', (event) => { 
      const target = event.target; 
      if (target.classList.contains('question__title')) { 
        const parent = target.closest('.questions__item') 
        const description = parent.querySelector('.question__description'); 
        description.classList.contains('active') ? close(target, description) : open(target, description);  
      }
    });

  }; 

  accordion();