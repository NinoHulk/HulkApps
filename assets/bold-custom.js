document.addEventListener('DOMContentLoaded', function() {
  BOLD.common.eventEmitter.on('BOLD_OPTIONS_option_products_loaded', function(event) {

const swatchImgs = document.querySelectorAll('.bold_option_value_swatch span');
swatchImgs.forEach((img)=>{
  let cloneImg = img.cloneNode(true);
  cloneImg.classList.add('bold-custom');
  img.parentElement.parentElement.nextElementSibling.prepend(cloneImg);
})
  })})