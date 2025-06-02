/**
 * Latihan JS
 * - DOM Traversing
 */

document.getElementById('slider').addEventListener('input', function(){
  let value = this.value;
  let span = this.nextElementSibling;
  let paragraph = span.nextElementSibling;

  span.innerText = value;
  paragraph.style.transform = 'rotate('+value+'deg)';
});