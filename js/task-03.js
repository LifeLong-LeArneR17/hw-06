const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const createMarkupPhoto = document.querySelector("ul.gallery");
console.log(createMarkupPhoto);


// images.forEach(el => {
//   const photoElement = document.createElement("img")
//   const { url, alt } = el;
//   photoElement.src = url;
//   photoElement.alt = alt;
//   createMarkupPhoto.append(photoEl                                                                            ement)
// })

const photoList = images => {
  return images
    .map(({ url, alt }) => {
      return `<li> <img src=${url} alt=${alt} /> </li>`
    })
    .join("")
}
createMarkupPhoto.insertAdjacentHTML('beforebegin', photoList(images));