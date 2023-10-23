import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  //   <div className="flex m-4 404 not-found">
  //       <div>
  //         <div className="mb-4 text-9xl">OOPS!</div>
  //         <div className="mb-4">
  //           Looks like we can't find the page you're looking for
  //         </div>
  //         <Link to="/">
  //           <span className="text-primary hover:underline">
  //             Return to Home Page
  //           </span>
  //         </Link>
  //       </div>
  //     </div>

  return (
    <div id="error-page" className="text-center flex flex-col m-4 404 error-page">
      <h1 className="p-6 m-6 text-9xl">Oops!</h1>
      <p className="mb-4 p-4">Page not found.</p>
      <p className="">Error description:</p>
      <p className="mb-4">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <span className="rounded-lg border-2 p-2 border-black font-bold hover:border-red-500 hover:underline">
          Return to Home Page
        </span>
      </Link>
    </div>
  );
}
