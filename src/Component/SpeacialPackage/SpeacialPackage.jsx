import { PackageLeft } from "./PackageLeft/PackageLeft";
import { PackageRight } from "./PackageRight/PackageRight";
import "./SpeacialPackage.scss";

export const SecialPackage = () => {
  return (
    <div className="container ">
      <h1 className="specialTitle" id="about">
        Special Package
      </h1>
      <div className="bothSide">
        <PackageLeft />
        <PackageRight />
      </div>
    </div>
  );
};
