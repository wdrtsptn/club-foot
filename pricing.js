
document.addEventListener('DOMContentLoaded', () => {
  const priceItems = document.querySelectorAll('.price-item');
  const waButton = document.getElementById('waOrderButton');

  let selectedPlan = '';

  console.log('pricing.js loaded');

  priceItems.forEach(item => {
    item.addEventListener('click', () => {
      selectedPlan = item.dataset.plan;
      console.log('Selected plan:', selectedPlan);

      const message =
`Halo Club Foot,
saya mau pesan paket ${selectedPlan}.

Jumlah sepatu:
Jenis sepatu:
Catatan tambahan:

Terima kasih.`;

      const encodedMessage = encodeURIComponent(message);
      waButton.href = `https://wa.me/6285797939120?text=${encodedMessage}`;

      console.log('WA link updated');
    });
  });

  waButton.addEventListener('click', (e) => {
    if (!selectedPlan) {
      e.preventDefault();
      alert('Silakan pilih paket terlebih dahulu.');
    }
  });
});
