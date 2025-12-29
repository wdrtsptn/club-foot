document.addEventListener("DOMContentLoaded", function () {
  const priceItems = document.querySelectorAll(".price-item");

  // DEBUG: pastiin item kebaca
  console.log("Pricing items:", priceItems.length);

  priceItems.forEach(item => {
    item.addEventListener("click", function () {

      // kalau item aktif → reset
      if (this.classList.contains("active")) {
        priceItems.forEach(i => {
          i.classList.remove("active", "hidden");
        });
        return;
      }

      // sembunyiin semua
      priceItems.forEach(i => {
        i.classList.remove("active");
        i.classList.add("hidden");
      });

      // aktifin yg diklik
      this.classList.add("active");
      this.classList.remove("hidden");
    });
  });
});
