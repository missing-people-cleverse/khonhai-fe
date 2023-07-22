import { IContentProps } from "./Content";

const RandomMPCard = ({ content }: IContentProps) => {
  return (
    // Link to content/:id
    <>
      <div className="w-full h-auto flex flex-col rounded-[10px] bg-white border-b-[5px] border-b-white hover:cursor-pointer hover:border-b-secondary">
        <img
          src="/mp2.jpeg"
          alt="missing people"
          className="w-full h-48 object-cover rounded-t-[10px]"
        />
        <p className="text-black text-center text-xl not-italic font-semibold mt-2">
          {content.name} {content.nickname}
        </p>
        <p className="text-black text-center text-base not-italic font-normal mt-2">
          {content.place} {content.province}
        </p>
      </div>
    </>
  );
};

export default RandomMPCard;
