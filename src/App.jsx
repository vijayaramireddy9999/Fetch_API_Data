import { useState } from "react";

import { useEffect } from "react";


const App = () =>{

const [food,setFood]=useState([]);

useEffect(()=>{
    fetch("https://dummyjson.com/recipes")
    .then(response => response.json())
    .then(data => setFood(data.recipes));
    // here data.recp - in api data , its in object not arr , "{recp:[{items}]}" -> so data.recipes
},[])

  return(
    <div>
      <h1>FOOD'S API DATA FETCHING</h1>
      <table border="1">
        <thead>
          <tr>
          <th>IMAGE</th>
          <th>RECIPE NAME</th>
          <th>INGREDIENTS</th>
          <th>CUISINE</th>
          <th>SERVINGS</th>
          <th>RATING</th>
        </tr>
        </thead>
        <tbody>
          {
            food.map((items)=>{
              return(
                <tr key={items.id}>
                  <td>{<img src ={items.image}/>}</td>
                  <td>{items.name}</td>
                  <td>{items.ingredients}</td>
                  <td>{items.cuisine}</td>
                  <td>{items.servings}</td>
                  <td>{items.rating}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;