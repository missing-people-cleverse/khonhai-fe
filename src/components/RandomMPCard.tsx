import classes from "./RandomMPCard.module.css";

interface IBriefContent {
  name: string;
  place: string;
}
const RandomMPCard = ({ name, place }: IBriefContent) => {
  return (
    // Link to content/:id
    <>
      <div className={classes.card}>
        <img
          src="/mp1.jpeg"
          alt="missing people"
          className={classes.thumbnail}
        />
        <p className={classes.name}>{name}</p>
        <p className={classes.place}>{place}</p>
      </div>
    </>
  );
};

export default RandomMPCard;
