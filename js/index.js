const toggleSpinner=displayStyle=>{
    document.getElementById('spinner').style.display=displayStyle;
  }
  const searchFood=()=>{
      const searchField=document.getElementById('search-field');
      toggleSpinner('block');
      const searchtext=searchField.value;
     
      searchField.value='';
      if(searchtext==''){
  
      }
  else{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchResult(data.meals));
  
  }
  
  }
  
  const displaySearchResult= meals =>{
  
      const searchResult=document.getElementById('search-result');
      searchResult.innerHTML='';
      
      // for(const meal of meals){
      //     console.log(meal);  
      // }
    meals.forEach(meal => {
      
      const div=document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div onclick="loadMealDetail()" class="card h-100">
              <img src="${meal.strMealThumb
              }" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p>${meal.strCategory}</p>
                <p>${meal.strArea} Food</p>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
               
              </div>
            </div>
      `;
      searchResult.appendChild(div);
    }) 
  
  }
  
  const loadMealDetail=mealId=>{
      console.log(mealId);
      const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>console.log(data.meals));
      toggleSpinner('none');
  
  }