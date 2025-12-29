document.addEventListener('DOMContentLoaded', () => {
  const priceItems = document.querySelectorAll('.price-item');
  const waButton = document.getElementById('waOrderButton');

  let selectedPlan = '';

  priceItems.forEach(item => {
    item.addEventListener('click', () => {
      // === PRICING UI ===
      priceItems.forEach(i => {
        i.classList.remove('active');
        i.style.display = 'none';
      });

      item.classList.add('active');
      item.style.display = 'flex';

      // === SIMPAN PAKET ===
      selectedPlan = item.dataset.plan;

      // === TEMPLATE WHATSAPP ===
      const message =
`Halo Club Foot,
saya mau pesan paket ${selectedPlan}.

Jumlah sepatu:
Jenis sepatu:
Catatan tambahan:

Terima kasih.`;

      const encodedMessage = encodeURIComponent(message);
      waButton.href = `https://wa.me/6285797939120?text=${encodedMessage}`;
    });
  });

  // === PROTEK TOMBOL WA ===
  waButton.addEventListener('click', (e) => {
    if (!selectedPlan) {
      e.preventDefault();
      alert('Silakan pilih paket terlebih dahulu.');
    }
  });
});
