
const locationAero = document.querySelector('#show-location');
const selectLocationList = document.querySelector('.selection');

document.addEventListener('scroll', e => {
  const header = document.querySelector('.menu');
  if(window.scrollY >= 20) {
    header.style.backgroundColor = '#fff';
    header.style.boxShadow = '0 13px 16px rgb(0 0 0 / 8%)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
  }
});
