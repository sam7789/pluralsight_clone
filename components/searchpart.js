let searchpart = () => {
  return `
          <div id="searchItem">
          <i class="fa fa-search"></i>
          <input type="text" oninput="debounce(main, 800)" id="searchInput" placeholder="What do you want to learn?" />
          <span id="p">&times;</span>
      </div>
      <div id="displaysearch"></div>
          `;
};

export default searchpart;
