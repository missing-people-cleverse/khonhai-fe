interface ITopic {
  name: string;
}

const PageHeader = (props: ITopic) => {
  return (
    <div className="bg-primary font-bold text-3xl text-text_light pt-[83px] pl-[180px] pb-[17px]">
      {props.name}
    </div>
  );
};

export default PageHeader;
