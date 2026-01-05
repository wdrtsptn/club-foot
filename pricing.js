document.addEventListener('DOMContentLoaded', () => {

  /* ================= PRICING ================= */
  const priceItems = document.querySelectorAll('.price-item');
  const waButton = document.getElementById('waOrderButton');
  let selectedPlan = '';

  priceItems.forEach(item => {
    item.addEventListener('click', () => {

      priceItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      selectedPlan = item.dataset.plan;

      const message =
`Hello Club Foot,
I’d like to order a shoe cleaning service: ${selectedPlan}

Name:
Phone Number:
Date:
Payment:
Number of Pairs:
Additional Notes:

Thank you.`;

      waButton.href =
        `https://wa.me/6285797939120?text=${encodeURIComponent(message)}`;
    });
  });

  waButton.addEventListener('click', e => {
    if (!selectedPlan) {
      e.preventDefault();
      alert('Pilih paket dulu bro.');
    }
  });

  /* ================= TOGGLE PROCESS / ORDER ================= */
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.icon');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.textContent = '+';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '−';
      }
    });
  });

});
