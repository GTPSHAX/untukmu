let timeout;

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleViewportChange = () => {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      if (isElementInViewport(item)) {
        item.classList.add('pop');
        item.classList.remove('sudah-masuk');
      } else {
        item.classList.remove('pop');
        item.classList.add('sudah-masuk');
      }
    });
  }, 100); // Ganti angka ini sesuai dengan kebutuhan untuk menentukan penundaan setelah scroll berhenti
};

window.addEventListener('scroll', handleViewportChange);
window.addEventListener('resize', handleViewportChange);
document.addEventListener('DOMContentLoaded', handleViewportChange);
