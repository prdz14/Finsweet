const burger = document.querySelector('.burger'),
    dropdown = document.querySelector('.dropdown')

burger.addEventListener('click', function () {
    dropdown.classList.toggle('active')
    dropdown.style.right = '0'
})