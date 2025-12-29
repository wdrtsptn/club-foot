const priceItems = document.querySelectorAll('.price-item');
const waButton = document.getElementById('waButton');

let selectedPlan = '';

priceItems.forEach(item => {
  item.addEventListener('click', () => {
    selectedPlan = item.dataset.plan;

    priceItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const message = `
Halo Club Foot,
saya mau pesan paket ${selectedPlan}.

Jumlah sepatu:
Jenis sepatu:
Catatan tambahan:

Terima kasih.
    `;

    const encodedMessage = encodeURIComponent(message);
    waButton.href = `https://wa.me/6285797939120?text=${encodedMessage}`;
  });
});
