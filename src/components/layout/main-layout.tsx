import { PropsWithChildren } from "react";
import { Header } from "../header/Header";
interface IProps extends PropsWithChildren {}

export function MainLayout(props: IProps) {
  return (
    <div>
      <div className="flex flex-col bg-gray-100">
        <Header />
        {props.children}
      </div>
    </div>
  );
}
