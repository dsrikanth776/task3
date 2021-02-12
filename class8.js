var MyMap=new Map();
MyMap.set(1,"uno");
MyMap.set(2,"dos");
MyMap.set(3,"tres");
MyMap.set(4,"cuatro");

console.log(MyMap);



for(let key of MyMap.keys()){

console.log(key);
}

for(let value of MyMap.values())
{

    console.log('value is {value}');
    }
 
for(let[key,value] of MyMap)
{
    console.log('key is:{key} and value is{value}');

}

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 3);

console.log(map1);
// expected output: Array [3, 12, 27, 48]


let map = new Map();

map.set('3', 'chowdary');   // a string key
map.set(1, 'srikanth');     // a numeric key
map.set(true, 'dabbara'); // a boolean key

// remember the regular Object  it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('3') ); // 'str1'
console.log(map.get(true));//boolean

console.log( map.size ); // 3


let sreekanth = { name: "Sreekanth" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set("Sreekanth", 123);

console.log( visitsCountMap.get(sreekanth) ); // 123

let Sreekanth = { name: "Sreekanth" };
let chowdary = { name: "chowdary" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[chowdary] = 234; // try to use ben object as the key
visitsCountObj[Sreekanth] = 343; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log( visitsCountObj["[object Object]"] ); // 343


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }



  var persons=[
      {firstname:"sreekanth",lastname:"dabbara"},
      {firstname:"bharath",lastname:"dabbara"},
      {firstname:"kishore",lastname:"nallani"}
  ];
  function getFullName(item){
      var fullname=[item.firstname,item.lastname].join("")
      return fullname;
      
  }
  function MyFunction(){
      console.log(persons.map(getFullName));


  }
  MyFunction()

// varable name is cars
  var cars=["BMW","volva","saab","ford"];
  var i;
  var text="";
  
  for(i=0;i<cars.length;i++)
  {
      text +=cars[i]+"<br>";
  }
  console.log(text);

  let myMap = new Map()



// using Map.prototype  iterator() 
// creating an empty map 
var Map1 = new Map(); 
  
// adding some elements to the map  
Map1.set("first name", "srikanth"); 
Map1.set("last name", "dabbara"); 
Map1.set("website", "www.svmeventes.com") 
Map1.set("friend 1", "kishore") 
Map1.set("friend 2", "bharath"); 
  
// By default this method returns the  
// same iterator object return by entires methods 
var getit = Map1[Symbol.iterator](); 
  
// it prints 
// ["first name", "srikanth"] 
// ["last name", "dabbara"] 
// ["website", "www.svmeventes.com"] 
// ["friend 1", "kishore"] 
// ["friend 2", "bharath"] 
for(var elem of getit)

    console.log(elem); 