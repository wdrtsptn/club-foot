document.addEventListener('DOMContentLoaded', () => {
  const priceItems = document.querySelectorAll('.price-item');
  const waButton = document.getElementById('waOrderButton');

  let selectedPlan = '';

  priceItems.forEach(item => {
    item.addEventListener('click', () => {
      // === PRICING UI ===
      priceItems.forEach(i => {
  i.classList.remove('active');
  i.classList.add('inactive');
});

item.classList.add('active');
item.classList.remove('inactive');

      // === SIMPAN PAKET ===
      selectedPlan = item.dataset.plan;

      // === TEMPLATE WHATSAPP ===
      const message =
`Helo Club Foot,
I’d like to order a shoe cleaning service ${selectedPlan}.

Name:
Phone Number:
Date:
Payment:
Number of Pairs:
Additional Notes:

Thank you.`;

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
