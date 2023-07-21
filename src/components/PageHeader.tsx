interface ITopic {
  name: string;
  buttonName?: string;
}

const PageHeader = (props: ITopic) => {
  return (
    <>
      <div className="bg-primary">
        <div className="flex flex-row  justify-between items-center">
          <div className="bg-primary font-bold text-3xl text-text_light pt-[83px] pl-[180px] pb-[17px]">
            {props.name}
          </div>
          {!!props.buttonName ? (
            <button className="btn-pageheader">{props.buttonName}</button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
