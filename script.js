document.addEventListener("DOMContentLoaded", function() {
    const loadingElement = document.querySelector('.loading');
  
    // Tambahkan kelas "muncul" pada elemen dengan kelas "loading"
    if (loadingElement) {
      loadingElement.classList.add('muncul');
    }
  
    // Hapus kelas "muncul" saat semua elemen di website selesai dimuat
    window.addEventListener('load', function() {
      if (loadingElement) {
        loadingElement.classList.remove('muncul');
      }
    });
});

// Fungsi untuk mengecek apakah elemen dalam viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Fungsi untuk menambah atau menghapus kelas "pop", "popo", dan "sudah-masuk" pada elemen
  function handleScroll() {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
      const hasEntered = item.classList.contains('sudah-masuks');
      
      if (!hasEntered && isInViewport(item)) {
        item.classList.add('sudah-masuks');
        item.classList.add('pop');
        item.classList.remove('popo');
        item.classList.remove('sudah-masuk');
      } else if (hasEntered && isInViewport(item)) {
        item.classList.add('pop');
        item.classList.remove('sudah-masuk');
      } else if (!hasEntered && !isInViewport(item)) {
        item.classList.add('popo');
        item.classList.remove('pop');
      } else if (hasEntered && !isInViewport(item)) {
        item.classList.add('sudah-masuk');
        item.classList.remove('pop');
      }
    });
  }
  
  // Mendengarkan event scroll
  window.addEventListener('scroll', handleScroll);
  
  // Memanggil fungsi saat halaman dimuat untuk menentukan kelas awal
  handleScroll();
  