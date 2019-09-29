import React,{useEffect,useState} from 'react';
import Recipe from './components/Recipe'

import Edamam from './components/Edamam'

const App = ()=> {
  const APP_ID = "8585bb65";
  const APP_KEY = "a79242067443ca4177f79cfa7f122a27";
  // let URL = `https://api.edamam.com/search?q=pollo&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('chicken')

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
  }
  
  useEffect(() => {
    getRecipies();
  },[query]);

  const handleInput = (e) =>{
    setSearch(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <div className="container">
        <Edamam></Edamam>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" aria-describedby="searchInput" value={search} onChange={handleInput}/>
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
        <div className="row">
          {recipes.map((recipe,index)=>{
            return(
              <Recipe
              key={index}
              title={recipe.recipe.label}
              img={recipe.recipe.image}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
              ></Recipe>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
/*tratar de resolver
useEffect(() => {
    getRecipies();
  },[search]);
  para que no se actualize cada vez,con debonce
 */