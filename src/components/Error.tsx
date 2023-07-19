interface IErrorProps {
  message: string;
}

const Error = (props: IErrorProps) => {
  return <div>{props.message}</div>;
};

export default Error;
