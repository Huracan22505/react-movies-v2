import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Load from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.container}>
      <Load type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
