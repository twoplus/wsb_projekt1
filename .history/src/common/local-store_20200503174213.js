export const localStor = {

    set() {
        const mobj = '{"order": ["name": "zupa", "price": "12"] }';
        const se = JSON.stringify(mobj);
        localStorage.setItem("booking",se);
    },
    read() {
      const out = localStorage.getItem("booking"); 
      return JSON.parse(out);
    },
    write(x) {
        let bookingData = JSON.parse(x);
        localStorage.setItem(bookingData);
    }
  };
  