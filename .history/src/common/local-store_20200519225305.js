export const localStore = {

    set() {
        //const mobj = '{"order": ["name": "zupa", "price": "12"] }';
        //const se = JSON.stringify(mobj);
        localStorage.setItem("mydata",1);
    },
    read() {
      const out = localStorage.getItem("mydata"); 
      return JSON.parse(out);
    },
    write(x) {
        //let bookingData = JSON.parse(x);
        const mobj = '{"order": {"start": {"day": 2, },"price": "12"] }';
        const se = JSON.stringify(mobj);
        localStorage.setItem("mydata",se);
    }
  };
  