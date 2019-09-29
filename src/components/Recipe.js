import React from 'react'
import Ingredients from './Ingredients'

const Recipe = (props)=>{
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-xs-6 mt-3">
            <div className="card">
                <img src={props.img} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">Recipe:{props.title}</h5>
                    <p className="card-text">Calories:{Math.round(props.calories)}</p>
                    <ul>
                        {props.ingredients.map((ingredient,index)=>{
                            return(
                                <Ingredients key={index} ingredient={ingredient}></Ingredients>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Recipe