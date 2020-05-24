export const localStore = {

    set() {
        
        localStorage.setItem("mydata",1);
    },
    read() {
      const out = localStorage.getItem("mydata"); 
      return JSON.parse(out);
    },
    write(x) {
        //let bookingData = JSON.parse(x);
        // const mobj =  {
        //   start: {
        //     day: "2", 
        //     month: "Luty", 
        //     year: "2020" 
        //   },
        //   end: {
        //     day: "7",
        //     month: "Marzec",
        //     year: "2021"
        //   },
        //  
        //   room: "1",
        //   treatments: [1,4]

        //  
        // };
        const se = JSON.stringify(x);
        localStorage.setItem("mydata",se);
    }
  };
  