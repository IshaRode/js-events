// Challenge 1 :
window.onload = function () {
    const name = document.getElementById('user');
    name.innerHTML = 'Isha';
  };
  
  // Challenge 2 :
  const buttons = document.getElementById('btn-click');
  buttons.onclick = function () {
    buttons.style.background = 'yellow';
  };
  
  // Chaleenge 3 :
  function makeSentence() {
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adverb = document.getElementById('adverb').value;
    const sentence = noun + ' ' + verb + ' ' + adverb;
    const statement = document.getElementById('statement');
    statement.innerHTML = sentence;
  }
  
  const button = document.getElementById('build-button');
  button.addEventListener('click', makeSentence);
  
  // Challenge 4.1 :
  
  const grandparent = document.getElementById('grandparent');
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');
  
  child.addEventListener('click', function () {
    console.log('Child clicked');
  });
  parent.addEventListener('click', function () {
    console.log('Parent clicked');
  });
  grandparent.addEventListener('click', function () {
    console.log('Grandparent clicked');
  });
  
  // Challenge 4.2 :
  grandparent.addEventListener(
    'click',
    function () {
      console.log('Grandparent clicked');
    },
    true
  );
  parent.addEventListener(
    'click',
    function () {
      console.log('Parent clicked');
    },
    true
  );
  child.addEventListener(
    'click',
    function () {
      console.log('Child clicked');
    },
    true
  );
  
  // Challenge 5 :
  const Ul = document.getElementById('category');
  
  Ul.addEventListener('click', function (event) {
    if (event.target.id === 'blazers') {
      console.log('blazers');
    }
  });
  
