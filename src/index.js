import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Single variable
/*let city = {
    name : "Nagpur",
    country : "India"
}*/
//Method to read from a variable
/*function Hello({library, message}) {
    return (
        <div>
            <h1>Welcome to {library}!!</h1>
            <p>{message}</p>
            <h1 id = "heading" className="cool-text">
                {city.name} is in {city.country}
            </h1>
        </div>
    )
}*/

//List variable without key
/*const lakelist = [
    {id: "1", name: "Echo", trailhead : "Echo"},
    {id : "2", name: "Maud", trailhead: "Wrights"},
    {id: "3", name: "Velma", trailhead: "Bayview"}
];*/
//Reading values from a list without key
/*function App({lakes}){
    return(
        <div>
            {lakes.map(lake => (
                <div>
                    <h2>{lake.name}</h2>
                    <p>Accessed by: {lake.trailhead}</p>
                </div>
            ))}
        </div>
    );
}*/

//method for summer
/*function Lake (){
    return(
        <div>
            <h1>"Hello, It's summer"</h1>
        </div>
    )
}*/
//method for winter
/*function SkiResort () {
    return (
        <div>
            <h1>"Hello, It's winter"</h1>
        </div>
    )
}*/
//method with if condition
/*function App (props){
    if (props.season === "summer"){
        return <Lake/>;
    } else if (props.season === "winter"){
        return <SkiResort/>;
    }
}*/

//creating array
/*const [first, second, third] = [
    "popcorn",
    "pineapple",
    "apple"
];*/
//console.log(first); //popcorn
//console.log(second); //pineapple

//using useState
/*function App (){
    //first param weather is a var and second param setStatus is a method
    const [weather, setWeather] = useState("Summer");
    const [year, setYear] = useState(2020);
    return(
    //to include two divs
        <>
            <div>
                <h1>"Increment an year {year}!!!</h1>
                <button onClick={() => setYear(year + 1)}>
                    newYear
                </button>
            </div>
            <div>
                <h1>"Hello, It's {weather}"</h1>
                <button onClick={() => setWeather("Summer")}>
                    Summer
                </button>
                <button onClick={() => setWeather("Winter")}>
                    Winter
                </button>
            </div>
        </>
    )
}*/

//method to create checkbox with alert using useEffect
/*function Checkbox() {
    const [checked, setChecked] = useState(true);
    useEffect(() => {
        alert(`checked: ${checked.toString()}`);
    })
    return (
        <>
            <input type = "checkbox"
                   value={checked}
                   onChange={() => setChecked(checked => !checked)}/>
            {checked ? "checked" : "unchecked"}
        </>
    );
}*/

//Method for input fields with useEffect()
/*function App(){
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    //second variable is dependency var which listens to change var
    useEffect(() => {
        console.log(`field 1 : ${val1}`)
    }, [val1]);
    useEffect(() => {
        console.log(`field 2 : ${val2}`)
    }, [val2]);
    return (
        <>
           <label>
               First Favorite Person:
               <input
                   value={val1}
                   onChange={e => setVal1(e.target.value)}
               />
           </label>
            <br/>
            <br/>
            <label>
                Second Favorite Person:
                <input
                    value={val2}
                    onChange={e => setVal2(e.target.value)}
                />
            </label>
        </>
    )
}*/

function GitHubUser({login}){
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);
    if (data) {
        return (
            <div>
                <h1>{data.login}</h1>
                <img src={data.avatar_url} width={200}/>
            </div>
        );
    }
    return null;
}

function App(){
    return <GitHubUser login="moontahoe"/>;
}
ReactDOM.render(
    //<Hello library="React" message="This is my first react learning!!!"/>,
    //<App lakes = {lakelist} />,
    //<App/>,
    //<Checkbox/>,
    <App/>,
    document.getElementById('root')
);


