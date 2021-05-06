const displayStory = () => {
  const para = document.createElement('p');
  container.appendChild(para);
  para.innerHTML = `Test <span>test</span> test. So then what do I need to do? I need to have some objects that I can pass into this thing so that it's a fair example of how a story would work.`;
}

const container = document.getElementById('container');


displayStory();
