const btn = document.querySelector('.btn');
btn.addEventListener('click',() => {
    btn.style.backgroundColor = '#ffac09';
    btn.style.boxShadow= '0 0 40px #ffac09';
    btn.styletransition = '.5s ease';
});