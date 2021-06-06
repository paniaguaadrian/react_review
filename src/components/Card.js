// Styles
import "./Card.css";

const Card = (props) => {
  // How to use our "card" className for this wrapper component and also, the classes that we will put on this component in another components
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
