export const smoothScroll = (e, targetId) => {
  e.preventDefault();
  const target = document.querySelector(targetId);
  if (!target) return;
  
  window.scrollTo({
    top: target.offsetTop - 100,
    behavior: 'smooth'
  });
}; 