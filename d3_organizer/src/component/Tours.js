// import data from "../data";
import Card from "./Card";

function Tours({tours,removeTour}) {
    return (
        <div className="container">

            <div className="title">
                <div className="nyadiv">
                <h3>D3 ORGANIZER</h3>
                </div>
                <h6>Plan your Daydream Destination Tour with us...</h6>
            </div>

            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>

        </div>
    );
}

export default Tours; 