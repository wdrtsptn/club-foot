const toggleButons =
  document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click',() => {
    const targetId = btn.dataset.target;
    const content = document.getElementById(targetId);

    content.classList.toggle('active');
  });
});
