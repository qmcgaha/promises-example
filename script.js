let promise = fetch("coffee.jpg");
let promise2 = promise.then(response => response.blob());
let promise3 = promise2.then(myBlob => {
  let objectURL = UL.createObjectURL(myBlob);
  let image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
})
let errorCase = promise3.catch(e => {
  console.log("There has been a problem with your fetch operation: " + e.message);
});