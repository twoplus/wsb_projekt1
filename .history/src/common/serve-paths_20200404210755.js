export const roomsService = {

    reDirect(goTo) {
      // pobiera liste wszystkich pokoi
      return fetch('http://localhost:3000/rooms')
        .then(response => response.json());
    }
  
  };