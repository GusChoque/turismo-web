import { useRouteError } from "react-router-dom";

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
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Page not found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>

    
  );
}