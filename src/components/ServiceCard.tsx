interface IService {
  name: string;
  link?: string;
  phoneNumber: string;
}

const ServiceCard = (props: IService) => {
  return (
    <>
      <div className="w-[15rem] h-[7rem] flex flex-col rounded-[10px] bg-bg_light_grey border-b-[3px] border-b-bg_light_grey  hover:border-b-[3px] hover:border-b-primary">
        <a
          href={props.link}
          className="text-black text-center text-xl not-italic font-semibold mt-5 underline underline-offset-2 decoration-1"
        >
          {props.name}
        </a>
        <p className="text-black text-center text-base not-italic font-normal mt-2">
          {props.phoneNumber}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
