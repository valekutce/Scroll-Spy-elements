let sections = document.querySelectorAll('section');
let navItems = document.querySelectorAll('li > a');

window.onscroll = () => {
    let height = document.documentElement.scrollTop;
    let curntSection;

    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop / 1.1 <= height) {
            curntSection = sections[i].getAttribute('id');
        }
    }

    for (let j = 0; j < navItems.length; j++) {

        navItems[j].classList.remove('active');

        if (navItems[j].getAttribute('data-list') === curntSection) {
            navItems[j].classList.add('active');
        }
    }

}