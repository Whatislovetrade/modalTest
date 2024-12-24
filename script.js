window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    

    const modalBtns = document.querySelectorAll('.show-modal-window'),
        modals = document.querySelectorAll('.modal-window'),
        closeBtnModal = document.querySelectorAll('.close-modal-window'),
        overlay = document.querySelector('.overlay'),
        body = document.querySelector('body')
    
    function showModal(modal) {
        modals.forEach(item => {
            body.style.height = '100vh'
            overlay.classList.remove('hidden')
            item.classList.remove('hidden')
        })
    }

    function hideModal() {
        modals.forEach(item => {
            item.classList.add('hidden')
            overlay.classList.add('hidden')
            body.style.height = ''
        })
    }

    modalBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const targetModal = modals[index]
            showModal(targetModal)
        })
    })

    closeBtnModal.forEach(btn => {
        btn.addEventListener('click', () => hideModal())
    })

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            hideModal()
        }
       
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal()
        }
    })
    
})


