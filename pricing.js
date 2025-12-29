const priceItems = document.querySelectorAll('.price-item');

priceItems.forEach(item => {
  item.addEventListener('click', () => {

    // kalau item sudah aktif → reset semua
    if (item.classList.contains('active')) {
      priceItems.forEach(i => {
        i.classList.remove('active', 'hidden');
      });
      return;
    }

    // reset dulu
    priceItems.forEach(i => {
      i.classList.remove('active');
      i.classList.add('hidden');
    });

    // aktifkan yang diklik
    item.classList.add('active');
    item.classList.remove('hidden');
  });
});
