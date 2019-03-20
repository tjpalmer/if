addEventListener('load', start);

function start() {
  let root = document.getElementById('root')!;
  let paragraph = document.createElement('p');
  paragraph.innerHTML = `<span>Sure I can add a sentence here.</span>`;
  root.appendChild(paragraph);
}
