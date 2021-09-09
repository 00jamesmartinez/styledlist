

var url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url).then((response)=>{
    return response.json();  // converting byte data to json
  }).then(data=>{
  
     const {title, body} = data;
  
     // creating h1 and p elements
     const list = document.createElement('ol');
     const element = document.createElement('li');
  
    // adding content
    list.textContent = title;
    element.textContent = body;
  
    // appending to div element
    div.appendChild(list);
    div.appendChild(element);
  
  }).catch(error=>{
      // logging error
     console.log(error);
  })

