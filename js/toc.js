var toc = document.querySelector('#table-of-contents')

function openToc() {
  toc.style.transitionDuration = '0.3s'
  toc.classList.add('open')
}

function closeToc() {
  toc.classList.remove('open')
}

function isTocTrigger(dom) {
  return Array.prototype.indexOf.call(dom.classList, 'toc-trigger') >= 0
}

function isTocOpened() {
  return Array.prototype.indexOf.call(toc.classList, 'open') >= 0
}

window.addEventListener('click', function(e) {
  if (isTocTrigger(e.target)) {
    var action = isTocOpened() ? closeToc : openToc
    action()
  } else {
    closeToc()
  }
})
