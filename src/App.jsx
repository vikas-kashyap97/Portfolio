import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);


function App() {
  return (
    <section className="font">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
