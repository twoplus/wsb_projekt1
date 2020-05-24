export const roomsService = {

    () {
      // pobiera liste wszystkich pokoi
      return fetch('http://localhost:3000/rooms')
        .then(response => response.json());
    }
  
  };