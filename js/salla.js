let remove_product = document.querySelector('.remove_product')
let salla = document.querySelector('.salla')


let formpayment = document.querySelector('.formpayment')
let bt_submit = document.querySelector('.bt-submit')

formpayment.style.display = 'none'
remove_product.addEventListener('click', (e) => {
    salla.style.display = 'none'
    formpayment.style.display = 'none'
})

bt_submit.addEventListener('click', (e) => {
    // salla.style.display = 'none'
    formpayment.style.display = "block";

})