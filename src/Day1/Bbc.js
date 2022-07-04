import "./Bbc.css";
import img1 from '../images/eric.jpeg'
import img2 from '../images/euros.jpeg'
import img3 from '../images/gab.jpeg'
import img4 from '../images/kal.jpeg'
const Bbc = () => {
  return (
    <div id="container">
      <Card
        heading="eric goes to united"
        subtext="united sign eric and all is forgiven, not really"
        image={img1}
      />
      <Card
        heading="arsenal sign someone"
        subtext="arsenal sign  and all is forgiven, not really"
        image={img2}
        />
      <Card
        heading="euros coming soon"
        subtext="euros is on soon and everone is excited"
        image={img3}
        />
      <Card
        heading="city sign Kal"
        subtext="city have saigned another really good player and will win again probs"
        image={img4}
      />
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image}/>
      <h2>{props.heading}</h2>
      <p>{props.subtext}</p>
    </div>
  );
};
export default Bbc;
