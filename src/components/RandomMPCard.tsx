import { useNavigate } from "react-router-dom";
import { IContentProps } from "./Content";

const RandomMPCard = ({ content }: IContentProps) => {
  const navigate = useNavigate();

  const navigateToContent = () => {
    navigate(`/content/${content.id}`);
  };

  return (
    <>
      <div
        onClick={navigateToContent}
        className="w-full h-auto flex flex-col rounded-[10px] bg-white border-b-[5px] border-b-white hover:cursor-pointer hover:border-b-secondary"
      >
        <img
          src={content.img![0]}
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
