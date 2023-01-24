function createNewProjectTile(projectData) {
  const newTile = document.createElement('div');
  newTile.classList.add('project-tile');
  newTile.dataset.projectID = projectData.listID;
  newTile.innerHTML = `
    <h3>${projectData.name}</h3>
    <img src="img/studios/${projectData.images[0]}">
  `;
  return newTile;
}

window.onload = () => {
  const projectSection = document.querySelector('#projects');
  const detailModal = document.querySelector('#detail-modal');
  const modalInfo = detailModal.querySelector('#modal-info');
  const modalContent = detailModal.querySelector('#modal-content');

  // set up dom
  const clickProject = (e) => {
    const pd = PROJECT_DATA[e.currentTarget.dataset.projectID];

    modalInfo.innerHTML = `
      <h2>${pd.name}</h2>
      
      <img src="img/studios/${pd.images[0]}">

      <h4>Description</h4>
      <p>${pd.description}</p>

      <h4>Interactions</h4>
      <div class="modal-interactions">
      ${
        pd.interactions
          .map((i) => `<img src="img/interactions/${INTERACTION_IMGS[i]}" />`)
          .join('')
      }
      </div>

      

      <img src="img/studios/${pd.images[1]}">

      <h4>Project Video</h4>
      <span class="modal-authors">${pd.authors}</span>
    `;

    detailModal.classList.add('show-modal');
    modalContent.scroll(0, 0);
  }

  const appendProjectTile = (p) => {
    const pt = createNewProjectTile(p);
    pt.addEventListener('click', clickProject);
    projectSection.appendChild(pt);
  }

  // inital setup
  projectSection.innerHTML = '';
  PROJECT_DATA.forEach(appendProjectTile);
 
  // set up modal listeners
  document.querySelector('#hide-modal').addEventListener('click', () => {
    detailModal.classList.remove('show-modal');
  });

  document.querySelector('#modal-hide-bg').addEventListener('click', () => {
    detailModal.classList.remove('show-modal');
  });

  // filters need to be a checkbox set :()
  const filters = new Set();

  // set up filters
  const allFilters = document.querySelectorAll('.filter');
  // console.log(allFilters);
  for (let i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('checked');

      if (e.currentTarget.className.includes('checked')) {
        filters.add(e.currentTarget.dataset.filter);
      } else {
        filters.delete(e.currentTarget.dataset.filter);
      }

      // gen dom from filters
      projectSection.innerHTML = '';
      if (filters.size > 0) {
        PROJECT_DATA
          .filter((p) => (p.tags.findIndex((t) => filters.has(t)) >= 0))
          .forEach(appendProjectTile);
      } else {
        PROJECT_DATA.forEach(appendProjectTile);
      }

    });
  }

  // to clear filters
  document.querySelector('#clear-filters').addEventListener('click', () => {
    for (let i = 0; i < allFilters.length; i++) {
      if (allFilters[i].className.includes('checked')) allFilters[i].classList.remove('checked');
    }
    filters.clear();

    // reset dom
    projectSection.innerHTML = '';
    PROJECT_DATA.forEach(appendProjectTile);
  });
}


