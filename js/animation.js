// !st Bar
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('barProg1Apply');
        }
      });
  });
  
observer1.observe(document.querySelector('#barProg1'));


// 2nd Bar
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('barProg2Apply');
        }
      });
  });
  observer2.observe(document.querySelector('#barProg2'));

// 3rd Bar
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('barProg3Apply');
        }
      });
  });

  observer3.observe(document.querySelector('#barProg3'));

//4th Bar
const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('barProg4Apply');
        }
      });
  });
  
  observer4.observe(document.querySelector('#barProg4'));

//5th Bar
const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('barProg5Apply');
        }
      });
  });
  
  observer5.observe(document.querySelector('#barProg5'));

//6th Bar
const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('barProg6Apply');
        }
      });
  });
  
  observer6.observe(document.querySelector('#barProg6'));
