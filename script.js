window.addEventListener('load', function() {
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
      // Mengatur timeout untuk menghapus kelas "muncul" setelah beberapa waktu
      setTimeout(function() {
        loadingElement.classList.remove('muncul');
      }, 2000); // Ganti nilai 2000 dengan durasi waktu yang diinginkan (dalam milidetik)
    }
  });
