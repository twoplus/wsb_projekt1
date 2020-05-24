export const servePaths = {

    reDirect(newLocation) {
      // pobiera liste wszystkich pokoi
      return fetch('http://localhost:3000/'+newLocation)
        .then(response => response.json());
    }
  
  };