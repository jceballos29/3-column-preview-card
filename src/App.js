import "./App.css";

import sedan from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

const columns = [
    {
        image: sedan,
        title: "sedan",
        description:
            "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
        color: "hsl(31, 77%, 52%)",
    },
    {
        image: suvs,
        title: "suvs",
        description:
            "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        color: "hsl(184, 100%, 22%)",
    },
    {
        image: luxury,
        title: "luxury",
        description:
            "Cruise in the vest car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
        color: "hsl(179, 100%, 13%)",
    },
];

function App() {
    return (
        <div className="App">
            <div className="card">
                {columns.map((column) => (
                    <div
                        key={column.title}
                        className="card__columns"
                        style={{ backgroundColor: column.color }}
                    >
                        <img src={column.image} alt="Type of Service"/>
                        <h1>{column.title}</h1>
                    <p>{column.description}</p>
                    <button style={{color:column.color}}>Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
