export let person = {
  name: 'Daniel',
  age: 15,
  isActive: true,
  hobbies: ['soccer'] ,

  toString()  {
    let objectString = this.name + ' ' + this.age
    console.log(objectString)
}
  
}

//console.log( person )
//person.toString();

let car = {
  brand: 'BMW',
  doors: 4,
  traction: '4x4',
  model: 'van', 
  
}

let smartTv = {
brand: 'samsung',
sizeInches: 32 ,
freshRate: '60Hz',
type: 'oled',
}

let youtubeVideo = {
quality: '1440p',
videoFormat: 'MOV',
videoType: 'entertainment'

}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
