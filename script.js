new Swiper("#swiper-1", {
    
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 14,
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true
    },
 
    navigation:{
        nextEl: "#nav-right",
        prevEl: "#nav-left"
    },
    pagination:
    {
        el: ("#swiper-1 .swiper-custom-pagination"),
        clickable: true,
        renderBullet: function(index, className)
        {
            return `<div class=${className}>
            <span class="number">${index + 1}</span>
            <span class="line"></span>
            </div>`
        }
    }
})

const switchTheme = () =>
{

    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'), newTheme

      newTheme = (dataTheme === 'light') ? 'dark' : 'light'

        rootElem.setAttribute('data-theme', newTheme)

    localStorage.setItem('theme', newTheme)
}


document.querySelector("#theme-switcher").addEventListener('click', switchTheme);

const contents = document.querySelectorAll(".content");
const observer = new IntersectionObserver(
    entries => {
         entries.forEach(entry =>
            {
                entry.target.classList.toggle("show", entry.isIntersecting)
                // if(entry.isIntersecting)
                // {
                //     observer.unobserve(entry.target);
                // }
            })
    }, 
)


contents.forEach(content =>{
    observer.observe(content);
})