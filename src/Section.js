import Carousel from './Carousel';
import data from './data.json';
import "./Section.scss";

const Section = () => {
    console.log(data);
    return (
        <div className="section">
            {
            data.map((elem, index) => {
                return (
                    <>
                    <span key={index}>{elem.category}</span>
                    <Carousel img={elem.images} />
                    </>
                )
            })
            }
        </div>
    )
}

export default Section
