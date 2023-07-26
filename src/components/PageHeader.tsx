import { Link } from "react-router-dom";

interface ITopic {
  name: string;
  buttonName?: string;
  link?: string;
}

const PageHeader = (props: ITopic) => {
  return (
    <>
      <div className="bg-primary">
        <div className="flex flex-row justify-between items-center">
          <div className="bg-primary font-bold text-3xl text-text_light pt-[83px] pl-[180px] pb-[17px] max-md:pl-[20px]">
            {props.name}
          </div>
          {!!props.buttonName ? (
            <Link to={`${props.link}`}>
              <button className="btn-pageheader max-md:mr-3">
                {props.buttonName}
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
