import { Link } from "react-router-dom";

export default function ErrorPage() {

  return (
    <div id="error-page" className="text-center flex flex-col m-4 404 error-page">
      <h1 className="p-6 m-6 text-9xl">Oops!</h1>
      <p className="mb-4 p-4">Page not found.</p>
      <p className="">Error description:</p>
      <p className="mb-4">
        <i>Page not found.</i>
      </p>
      <Link to="/">
        <span className="rounded-lg border-2 p-2 border-black font-bold hover:border-red-500 hover:underline">
          Return to Home Page
        </span>
      </Link>
    </div>
  );
}
