window.addEventListener('load', function() {
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
      // Mengatur timeout untuk menghapus kelas "muncul" setelah beberapa waktu
      setTimeout(function() {
        loadingElement.classList.remove('muncul');
      }, 2000); // Ganti nilai 2000 dengan durasi waktu yang diinginkan (dalam milidetik)
    }
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
      
      if (isInViewport(item)) {
        item.classList.add('pop');
        item.classList.remove('sudah-masuk');
      } else {
        item.classList.remove('pop');
        item.classList.add('sudah-masuk');
      }
    });
  }
  
  // Mendengarkan event scroll
  window.addEventListener('scroll', handleScroll);
  
  // Memanggil fungsi saat halaman dimuat untuk menentukan kelas awal
  handleScroll();
  
