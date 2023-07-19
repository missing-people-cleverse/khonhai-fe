import RandomMPCard from "./RandomMPCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./RandomMp.module.css";

const data = [
  {
    name: "simon",
    place: "bangkok",
  },
  {
    name: "neo",
    place: "rama9",
  },
  {
    name: "morpheus",
    place: "nan",
  },
  {
    name: "neo",
    place: "rama9",
  },
  {
    name: "morpheus",
    place: "nan",
  },
  {
    name: "morpheus",
    place: "nan",
  },
  {
    name: "neo",
    place: "rama9",
  },
  {
    name: "morpheus",
    place: "nan",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const RandomMP = () => {
  // useContentList
  return (
    <div className="bg-primary ">
      <div className="flex flex-row gap-5 justify-between items-center py-8 w-10/12 mx-auto">
        <Carousel
          infinite={true}
          autoPlay={true}
          draggable={true}
          swipeable={true}
          containerClass={classes.carouselontainer}
          itemClass={classes.carouselItem}
          autoPlaySpeed={5000}
          responsive={responsive}
          partialVisible={false}
        >
          {data.map((person) => (
            <div className="mx-10 overflow-hidden">
              <RandomMPCard key={person.name} {...person} />
            </div>
          ))}
        </Carousel>
        <div>
          <p className="font-bold text-3xl text-text_light">
            คุณเคยเห็นคนเหล่านี้ไหม?
          </p>
        </div>
      </div>
    </div>
  );
};

export default RandomMP;
