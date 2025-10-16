const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')

// убирает скролл при открытии окна
const body = document.body


const openModal = () =>{
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}
const closeModal = () =>{
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}


// открытие окна
btn.addEventListener('click', openModal)

// закрытие окна
modal.addEventListener('click', event =>{
    const target = event.target
    if(target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')){
        closeModal()
    }
})

// закрытие окна при нажатии клавиши
document.addEventListener('keydown', event =>{
    if(event.code === 'Escape' && modal.classList.contains('modal--open')){
        closeModal()
    }
})