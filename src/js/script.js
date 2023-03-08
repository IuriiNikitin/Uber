window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
    document.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("menu") &&
        !e.target.classList.contains("hamburger") &&
        !e.target.classList.contains("hamburger_line") &&
        menu.classList.contains("menu_active") &&
        hamburger.classList.contains("hamburger_active")
      ) {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
      }
    });
})