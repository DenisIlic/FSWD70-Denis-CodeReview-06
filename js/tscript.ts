class Places { 
    kindof = "";
    name = "";
    city = ""; 
    zipCode = "";   
    address = "";  
    imgTeaser = "";
    created = "";
    constructor(, name, city, zipCode, address, imgTeaser, created) { 
        this.kindof = kindof;
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.imgTeaser = imgTeaser;
        this.created = created;
   }

   displayPlaces() { 
       return `

         <div class="col-lg-3 col-md-6 col-sm-12 mt-5">

          <div class="row m-1">

              <div class="info text-center col-lg-12 text-white bg-dark">

                 <h2>${this.name}</h2>
                 <p> ${this.address}, ${this.zipCode} ${this.city} </p>

              </div>

              <div class=" col-lg-12 p-0">
                <img class="imgs w-100 d-lg-block d-md-block d-sm-none d-xs-none d-none" src="${this.imgTeaser}">
              </div>

              <div class="pt-3 col-lg-12 text-center text-white bg-dark inform  border-top  border-secondary" >
              
             
       `;         
   }

   /* Closure tags in order to make possible to nest other properties between those functions*/

   displayPlacesEnd(){    

       return `
             

            </div>

            <p class="bg-secondary text-white w-100 text-center">Created: ${this.created}</p>

          </div><!-- nested row -->
        
      </div>  

       `;
   }

}



class Restaurant extends Places { 
    phone; 
    type;
    web;

   constructor(kindof, name, city, zipCode, address, imgTeaser, created, web, phone, type) {
       super(kindof, name, city, zipCode, address, imgTeaser, created); 
       this.web = web;
       this.phone = phone;
       this.type = type;
   }

   displayRestaurant() { 
       return `
               ${super.displayPlaces()}
               <p><a href="#"> ${this.web} </a></p>
               <p> ${this.phone}</p>
               <p> ${this.type} restaurant</p>
               ${super.displayPlacesEnd()}

       `; 
    }

}


class Events extends Places { 
    date; 
    time;
    ticket;

   constructor(kindof, name, city, zipCode, address, imgTeaser, created, date, time, ticket) {
       super(kindof, name, city, zipCode, address, imgTeaser, created); 
       this.date = date;
       this.time = time;
       this.ticket = ticket;
   }

   displayEvents() { 
       return `
               ${super.displayPlaces()}
               <p>Price: ${this.ticket}€</p>
               <p> ${this.date} -  ${this.time}</p>
               <p></p>
               ${super.displayPlacesEnd()}

       `; 
   }

}

var arrObj:Array<any>=[];

arrObj.push(new Places("Place", "Botanical Garden Okinawa", "Japan", "2 Chome-3-1 Asakusa ", "Taito City", "img/asakusa1.jpg", `08.05.2013 18:25` ));
arrObj.push(new Places("Place", "Kinkaku-Ji Golden Palast", "Kyoto", "1 Kinkakujicho ", "Kita-Ku", "img/kinkaku1.jpg", "08.05.2013 18:25"));
arrObj.push(new Restaurant("Restaurant", "Restaurant Mu Luxembourg", "Luxembourg", "1160 ", "40 Boulevard d'Avranches", "img/lux.jpg", `08.05.2013 18:25`,"www.restaurants.accorhotels.com", "+43 1 58 528 56 l", "Viennese"));
arrObj.push(new Restaurant("Restaurant", "Italia", "Vienna", "1015 ", "Etwasplatz 7", "img/shang.JPG", `05.07.2002 13:23`,"www.italia.at", "+43 8 33 222 90 l", "Italian"));
arrObj.push(new Events("event", "Metallica", "Vienna", "1150 ", "Roland Rainer Platz 1", "img/yosakoi.JPG", `03.01.2019 09:34`, " 15.03.2017 ", "12:45", "65,50"));
arrObj.push(new Events("event", "R.H.C.P.", "Vienna", "1010 ", "kettenbrückengasse 6", "img/solomun.JPG", `06.07.2015 13:23`, " 20.01.2014 ", "14:15", "35,50" ));
arrObj.push(new Events("event", "Buckethead", "Vienna", "1022 ", "Somwhere 13", "img/dis.JPG", `02.06.2011 20:30`,"13.07.2005", "22:30", "42,30"));
arrObj.push(new Events("event", "B.B.King", "Innsbruck", "1010 ", "Wienstraße 89", "img/bb.JPG", `12.10.2009 20:30`,"23.09.2009", "21:45", "28,50"));



var row = document.getElementById('mainRow');



function show(){

      arrObj.forEach(function (arrElement) {

              if(arrElement.kindof == "location"){

                  row.innerHTML += arrElement.displayLocations()+arrElement.displayLocationsEnd();

              }else if(arrElement.kindof  == "restaurant"){

                  row.innerHTML += arrElement.displayRestaurant();

              }else if(arrElement.kindof  == "event"){

                  row.innerHTML += arrElement.displayEvents();
              }
      });
  }






var filename = document.URL.substring(document.URL.lastIndexOf('/')+1);


if(filename == "index.html"){

   show();

}else if(filename == "index-asc.html"){

   arrObj.sort(confrontaD);
   show();

}else if(filename == "index-desc.html"){

   arrObj.sort(confrontaD);
   arrObj.reverse();
   show();

}



function confrontaD(a, b) {

      let piece = a.created.split('.');
      let pieceB = b.created.split('.');

      let datAin =piece[1]+"."+piece[0]+"."+piece[2];
      let datBin =pieceB[1]+"."+pieceB[0]+"."+pieceB[2];
       
      let datA = new Date(datAin);
      let datB = new Date(datBin);

      if (datA < datB) { return -1; }

         else {

           if (datA > datB) { return 1; }

         else { return 0; }
      }
}



