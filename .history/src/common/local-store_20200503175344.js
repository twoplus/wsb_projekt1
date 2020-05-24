export const localStore = {

    set() {
        //const mobj = '{"order": ["name": "zupa", "price": "12"] }';
        //const se = JSON.stringify(mobj);
        localStorage.setItem("booking",4);
    },
    read() {
      const out = localStorage.getItem("booking"); 
      return ;//JSON.parse(out);
    },
    write(x) {
        //let bookingData = JSON.parse(x);
        localStorage.setItem("mydata",x);
    }
  };
  