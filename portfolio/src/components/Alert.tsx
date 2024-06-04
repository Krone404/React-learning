import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Alert = ({ children, onClick }: Props) => {
  return <div className="alert alert-primary alert-dismissible fade show">{children}<button className="btn-close" onClick={onClick}></button></div>;
};

export default Alert;
