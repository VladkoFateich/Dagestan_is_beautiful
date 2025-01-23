window.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------ TABS ------------------------------------

  const programs = document.querySelectorAll('.tours__program'),
    content = document.querySelectorAll('.tours__description'),
    tour = document.querySelector('.tours__programs');

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

  // ------------------------------------ /TABS ------------------------------------
});
