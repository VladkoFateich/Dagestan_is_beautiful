window.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------ TABS ------------------------------------

  const programs = document.querySelectorAll('.tours__program'),
    content = document.querySelectorAll('.tours__description'),
    tour = document.querySelector('.tours__programs');

  const // days = document.querySelectorAll('.days__item'),
    descriptions = document.querySelectorAll('.description__content'),
    // items = document.querySelector('.days__items'),
    titles = document.querySelectorAll('.day__title');
  // const days = document.createElement('div'),
  //   descriptions = document.createElement('div'),
  //   items = document.createElement('div');
  // days.classList.add('.days__item');
  // descriptions.classList.add('.description__content');
  // items.classList.add('.days__items');

  function hideContent() {
    content.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    programs.forEach((item) => {
      item.classList.remove('tours__program_active');
    });
  }

  function showContent(i = 0) {
    content[i].classList.add('show', 'fade');
    content[i].classList.remove('hide');
    programs[i].classList.add('tours__program_active');
  }

  hideContent();
  showContent();

  tour.addEventListener('click', showTourDescr);

  function showTourDescr(e) {
    const target = e.target;
    if (target && target.classList.contains('tours__program')) {
      programs.forEach((item, i) => {
        if (target === item) {
          hideContent();
          showContent(i);
        }
      });
    }
  }

  function hideDays() {
    descriptions.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    titles.forEach((item) => {
      item.classList.remove('day__title_active');
    });
  }
  function showDays(i = 0) {
    descriptions[i].classList.add('show', 'fade');
    descriptions[i].classList.remove('hide');
    titles[i].classList.add('day__title_active');
  }

  hideDays();
  showDays();

  titles.forEach((title) => {
    title.addEventListener('click', showDaysDescr);
  });

  // titles.addEventListener('click', showDaysDescr);

  function showDaysDescr(e) {
    const target = e.target;
    if (target && target.classList.contains('day__title')) {
      titles.forEach((day, i) => {
        if (target === day) {
          hideDays();
          showDays(i);
        }
      });
    }
  }

  // if (count === 1) {
  //   hideDays();
  //   showDays(i + 6);
  // }

  // ------------------------------------ /TABS ------------------------------------
});
