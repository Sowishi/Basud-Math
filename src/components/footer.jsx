import { Footer } from "flowbite-react";
import logo from "../assets/received_1497173757635461-transformed.png";

export function TmsFooter() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className="wrapper flex items-center justify-start">
            <img
              className="rounded-xl"
              style={{ width: "60px" }}
              src={logo}
              alt=""
            />
            <h1 className={"text-2xl font-bold ml-5"}>
              Basud National High School | Learn Math
            </h1>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="Basud National High School | Learn Math"
          year={2024}
        />
      </div>
    </Footer>
  );
}
