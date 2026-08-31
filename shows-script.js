fetch('shows.json')
  .then(response => response.json()) 
  .then(games => {
    
    // Sort the entire list of games alphabetically by title
    games.sort((a, b) => a.title.localeCompare(b.title));
    
    // Loop through the newly sorted list
    games.forEach(game => {
      
      const targetGridId = `grid-${game.tier}`;
      const gridContainer = document.querySelector(`#${targetGridId}`);
      
      if (gridContainer) {
        const gameDiv = document.createElement('div');
        gameDiv.textContent = game.title;
        gridContainer.appendChild(gameDiv);
      }
    });
  })
  .catch(error => {
    console.error('Error loading the games:', error);
  });