import { Alert } from "@mui/material";

interface IErrorProps {
  message: string;
}

const Error = (props: IErrorProps) => {
  return (
    <>
      <Alert severity="error">
        <strong>Error</strong> - {props.message}
      </Alert>
    </>
  );
};

export default Error;
