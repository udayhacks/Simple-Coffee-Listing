import React from "react";
import useCoffeeData from '../hooks/Api.js'
import Card from '../Cards/Card.jsx'
import style from './Display.module.css'
import {useState} from "react";

export default function Display() {


    const [coffee, loading, error] = useCoffeeData();
    const[clickCollection, setClickedCollection] = React.useState(false);
    const[clickAvailable, setClickedAvailable] = React.useState(false);
    const [showAvailable ,setShowAvailable] = useState(false);
    //console.log(coffee);

    const available_coffee = coffee.filter(coffee => coffee.available === true);
    console.log(available_coffee);

    if (loading) return (
        <>
            <h1>Loading .... </h1>
        </>
    );
    if ( error ) return <p className={style.error}>{error}</p>;


    const available_handle = ()=>{

        setShowAvailable(true);
        setClickedCollection(false);
        setClickedAvailable(true);
    }

    const collection = ()=>{

    setShowAvailable(false);
    setClickedCollection(true);
    setClickedAvailable(false)
    }

    const display_coffee = showAvailable ? available_coffee :coffee;

    return (
        <>
            <div className={style.wrapper}>



                <div className={style.ourCollection}>

                    <section className={style.sec}>
                        <h1 className={style.title}> Our Collection</h1>
                        <p className={style.intro}>Introducing our Coffee Collection, a selection of unique coffees
                            from different roast types and origins, expertly roasted in small
                            batches and shipped fresh weekly. </p>
                    </section>


                </div>

                    <div className={style.buttons}>

                        <button  className= { clickCollection ?  style.clicked : style.collection_button}  type = "button" onClick={collection}> All Products</button>
                        <button className= { clickAvailable?  style.clicked : style.available_button } type = "button" onClick={available_handle} > Available Now</button>

                    </div>
                    <div className={style.displayCoffee}>
                        {
                            display_coffee.map(
                                (item) => (
                                    <Card key = {item.id}  {...item}/>
                                )
                            )
                        }
                    </div>


            </div>
        </>
    );
}