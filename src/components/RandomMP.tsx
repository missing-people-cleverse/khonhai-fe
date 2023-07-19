import RandomMPCard from "./RandomMPCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    name: "จอน",
    place: "สวนลุม",
  },
  {
    name: "จิ๋ว",
    place: "สวนหลวง",
  },
  {
    name: "แดง",
    place: "สวนจตุจักร",
  },
  {
    name: "เหมียว",
    place: "พระรามไนน์",
  },
  {
    name: "เจ้าขาว",
    place: "หลังบ้าน",
  },
  {
    name: "ชิโระ",
    place: "หน้าบ้าน",
  },
  {
    name: "อ้วน",
    place: "ร้านหมูกะทะ",
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
      <div className="flex flex-row gap-5 justify-between items-center py-8 w-5/6 mx-auto">
        <Carousel
          infinite={true}
          autoPlay={true}
          draggable={true}
          swipeable={true}
          containerClass="carouselontainer"
          itemClass="carouselItem"
          autoPlaySpeed={6000}
          responsive={responsive}
          partialVisible={false}
        >
          {data.map((person) => (
            <div className="mx-3 overflow-hidden">
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
