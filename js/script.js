var Places = /** @class */ (function () {
    function Places(places, destination, adress, destination1, adress1) {
        this.places = "";
        this.destination = "";
        this.adress = "";
        this.destination1 = "";
        this.adress1 = "";
        this.places = places;
        this.destination = destination;
        this.adress = adress;
        this.destination1 = destination1;
        this.adress1 = adress1;
    }
    Places.prototype.name = function () {
        return "<div class=\"container\">\n\t\t\t<h1> Places:</h1>\n\t\t\t<li class=\"mb-3\">" + this.destination + "</li>\n\t\t\t<ul>\n\t\t\t<li class=\"mb-3\">" + this.adress + "</li>\n\t\t\t<li><img src=\"img/asakusa1.jpg\"></li>\n\t\t\t</ul>\n\t\t\t<li class=\"mb-3\"> " + this.destination1 + "</li>\n\t\t\t<ul>\n\t\t\t<li class=\"mb-3\">" + this.adress1 + "</li>\n\t\t\t<li><img src=\"img/garden1.jpg\"></li>\n\t\t\t</ul>\n\t\t\t</div>";
    };
    ;
    return Places;
}());
var japan = new Places("Places", "Taito City, Japan", "2 Chome-3-1 Asakusa", "Botanical Garden Okinawa", "2146 Chibana Okinawa, Japan");
document.write(japan.name());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Restaurants = /** @class */ (function () {
    function Restaurants(restaurants, name, adress, website, name1, adress1, website1) {
        this.restaurants = "";
        this.name = "";
        this.adress = "";
        this.website = "";
        this.name1 = "";
        this.adress1 = "";
        this.website1 = "";
        this.restaurants = restaurants;
        this.name = name;
        this.adress = adress;
        this.website = website;
        this.name1 = name1;
        this.adress1 = adress1;
        this.website1 = website1;
    }
    Restaurants.prototype.rest = function () {
        return "<div class=\"container\">\n\t\t\t<h1> Restaurant:</h1>\n\t\t\t<li class=\"mb-3\">" + this.name + "</li>\n\t\t\t<ul>\n\t\t\t<li class=\"mb-3\">" + this.adress + "</li>\n\t\t\t<li><a href=\"https://restaurants.accorhotels.com/de/restaurant-5555_R001-mu-luxembourg-luxembourg.shtml\">" + this.website + "</li>\n\t\t\t<li><img src=\"img/lux.jpg\"></li>\n\t\t\t</ul>\n\t\t\t<li class=\"mb-3\"> " + this.name1 + "</li>\n\t\t\t<ul>\n\t\t\t<li class=\"mb-3\">" + this.adress1 + "</li>\n\t\t\t<li><a href=\"http://www.shangri-la.com/de/london/shangrila/dining/\">" + this.website1 + "</li>\n\t\t\t<li><img src=\"img/shang.jpg\"></li>\n\t\t\t</ul>\n\t\t\t</div>";
    };
    ;
    return Restaurants;
}());
var eat = new Restaurants("Restaurants", "Restaurant Mu Luxembourg", "40 Boulevard d'Avranches, 1160 Luxembourg", "https://restaurants.accorhotels.com/de/restaurant-5555_R001-mu-luxembourg-luxembourg.shtml", "Shangri-La Hotel, At The Shard, London", "31 St Thomas Street, London", "http://www.shangri-la.com/de/london/shangrila/dining/");
document.write(eat.rest());
/////////////////////////////////////////////////////////////////////////////////////////////
var Festival = /** @class */ (function () {
    function Festival(event, name, website, when, where, price, name1, website1, when1, where1, price1) {
        this.event = "";
        this.name = "";
        this.website = "";
        this.when = "";
        this.where = "";
        this.price = "";
        this.name1 = "";
        this.website1 = "";
        this.when1 = "";
        this.where1 = "";
        this.price1 = "";
        this.event = event;
        this.name = name;
        this.website = website;
        this.when = when;
        this.where = where;
        this.price = price;
        this.name1 = name1;
        this.website1 = website1;
        this.when1 = when1;
        this.where1 = where1;
        this.price1 = price1;
    }
    Festival.prototype.events = function () {
        return "\n\t\t\t<div class=\"container\">\n\t\t\t<h1>Events</h1>\n\t\t\t<li class=\"mb-3\">" + this.name + "</li>\n\t\t\t<ul>\n\t\t\t<li class=\"mb-2\"><a href=\"http://visitkochijapan.com/things_to_do/events/yosakoi_festival.html\">" + this.website + "</li>\n\t\t\t<li class=\"mb-2\">" + this.when + "</li>\n\t\t\t<li class=\"mb-2\">" + this.where + "</li>\n\t\t\t<li class=\"mb-2\">" + this.price + "</li>\n\t\t\t<li><img src=\"img/yosakoi.jpg\"></li>\n\t\t\t</ul>\n\t\t\t<li class=\"mb-3\">" + this.name1 + "</li>\n\t\t\t<ul>\n\t\t\t<li class=\"mb-2\"><a href=\"https://en.japantravel.com/tokyo/solomun-at-womb/43939\">" + this.website1 + "</li>\n\t\t\t<li class=\"mb-2\">" + this.when1 + "</li>\n\t\t\t<li class=\"mb-2\">" + this.where1 + "</li>\n\t\t\t<li class=\"mb-2\">" + this.price1 + "</li>\n\t\t\t<li><img src=\"img/solomun.jpg\"></li>\n\t\t\t</ul>\n\t\t\t</div>";
    };
    ;
    return Festival;
}());
var go = new Festival("Event", "Yosakoi Festival", "http://visitkochijapan.com/things_to_do/events/yosakoi_festival.html", "Mar 11, 2019", "2-2-10 Otesuji, Kochi City, Kochi Prefecture", "Free", "Solumun at Womb", "https://en.japantravel.com/tokyo/solomun-at-womb/43939", "Apr 21st - Apr 22nd 2018 ,  10:00pm - 4:30am", "2-16 Maruyama-cho, Shibuya-ku, Tokyo 150-0044, Japan", "4000 Yen");
document.write(go.events());
