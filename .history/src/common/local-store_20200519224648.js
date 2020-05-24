export const localStore = {

    set() {
        //const mobj = '{"order": ["name": "zupa", "price": "12"] }';
        //const se = JSON.stringify(mobj);
        localStorage.setItem("mybooking",1);
    },
    read() {
      const out = localStorage.getItem("mydata"); 
      return out;//JSON.parse(out);
    },
    write(x) {
        //let bookingData = JSON.parse(x);
        localStorage.setItem("mydata",x);
    }
  };
  