// @ts-check
(() => {

  const header = document.getElementById('showcase');
  // @ts-ignore
  // @ts-ignore
  let headerHeight = header.offsetHeight;
  /**@property {HTMLMediaElement} video */
  const video = document.getElementById('video');
  // color Change
  const colorsElems = document.querySelectorAll('span.color');
  const rootEl = document.querySelector(':root')
  colorsElems.forEach(element => {
    element.addEventListener('click', (e) => {
      // @ts-ignore
      console.log(e.target.style)
      // @ts-ignore
      rootEl.style.setProperty('--main-background',
        // @ts-ignore
        e.target.style.background);
      // @ts-ignore
      rootEl.style.setProperty('--main-color',
        // @ts-ignore
        e.target.style.color);
    })
  });
  // @ts-ignore
  video.currentTime = 1;
  // @ts-ignore
  video.play().then(() => {
    // @ts-ignore
    // @ts-ignore
    document.onscroll = ((event) => {
      // @ts-ignore
      video.pause();
    })
  })


  const langMap = [

    {
      name: 'javascript',
      value: 95,
    },
    {

      name: 'HTML',
      value: 91,
    },
    {

      name: 'CSS',
      value: 90,
    },
    {

      name: 'React',
      value: 92,
    },
    {

      name: 'Flutter',
      value: 85,
    },
    {

      name: 'Dart',
      value: 65,
    },
    {

      name: 'Node',
      value: 70,
    },
    {

      name: 'PHP',
      value: 34,
    },
    {

      name: 'Python',
      value: 25,
    },
    {

      name: 'Angular',
      value: 80,
    },

    {
      name: 'React-Native',
      value: 50,
    }

  ];

  const mapLangValueToColor = (value) => {
    if (value >= 90) {
      return 'bg-success';
    } else if (value >= 75) {
      return 'bg-info';
    } else if (value >= 50) {
      return 'bg-normal';
    } else if (value >= 35) {
      return 'bg-warning'
    } else {
      return 'bg-danger'
    }
  }



  const elements = ({ value, name }) => `<div class="progress hidden" id="${name}">
            <div  class="progress-bar progress-bar-striped ${mapLangValueToColor(value)}" role="progressbar" style="width: ${value}%"
              aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100"></div>
              <h6 class="progress-bar-name">${name}</h6>
          </div>`
  const skillsetContainer = document.getElementById('technologies-list');

  const eleSort = langMap.sort(((a, b) => a.value >= b.value ? -1 : 1));
  const eleMap = eleSort.map(elements).join('')
  skillsetContainer.innerHTML = eleMap;

  /**
   * 
   * @param {IntersectionObserverEntry[]} entries 
   * @param {IntersectionObserver} observer 
   */
  function callbackFunc(entries, observer) {
    entries.forEach(entry => {

      console.log(entry.target.id)

      switch (entry.target.id) {
        case 'technologies-list':
          if(!entry.isIntersecting) {
            return;
          }
          const elements = document.getElementById(entry.target.id).childNodes
          
          elements.forEach(node => {
            // @ts-ignore
            node.classList.remove('hidden');
            
            node.childNodes.forEach((_node) => {
              // @ts-ignore
              node.classList.add('show-tech')
            })
          })
          
          break;
        case 'technologies':
          
          if(entry.isIntersecting) {
            observer.observe(document.getElementById('technologies-list'));
          } else {
            return;
          }
        case 'Experience':
        case 'Development':
          if(!entry.isIntersecting) {
            return;
          }

          
          const element = document.getElementById(entry.target.id);
          element.classList.add('reveal-card');

          break;
        default:
          break;
      }

    
    });
  }


  let observer = new IntersectionObserver(callbackFunc, {
    root: null,
    rootMargin: '100px',
    threshold: 0.9,
  });

  
 
  observer.observe(document.getElementById('technologies'));
  observer.observe(document.getElementById('Experience'));

  observer.observe(document.getElementById('Development'));


  


})()