(function(){

    // бургер-меню
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLinl = e.target.closest('.nav__link')

        if(!burgerIcon && !burgerNavLinl) return
        if(document.documentElement.clientWidth > 900) return //условия, после соблюдения которых запускается нижний скрипт
        
        if(!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu')
        } else{
            document.body.classList.remove('body--opened-menu')
        }
    }
    
    // модальное окно
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-btn')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

})()