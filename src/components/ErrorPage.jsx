import { useRouteError } from "react-router-dom";
import errorImg from "../../src/static/errorImg.png";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-dvh flex justify-around flex-row items-center ">
      <div>
      <h1 className="text-center text-indigo-700   p-5 text-6xl font-semibold">Error 404</h1>
      <p className="text-center text-white p-5 text-2xl">Lo siento, la página no existe.</p>
      <p className="text-center text-white">
        <i className="text-center text-white" >{error.statusText || error.message}</i>
      </p>
      </div>
      <img src={errorImg} alt="" className="size-96" />
    </div>
  );
}