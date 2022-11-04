import { createBrowserRouter } from 'react-router-dom';
import Checkout from '../../Checkout/Checkout';
import Main from '../../layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Order from '../../Pages/Order/Order';
import SignUp from '../../Pages/SignUp/SignUp';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/login',
            element: <Login></Login>,
         },
         {
            path: '/signup',
            element: <SignUp></SignUp>,
         },
         {
            path: '/checkout/:id',
            element: <Checkout></Checkout>,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
         },
         {
            path: '/orders',
            element: <Order></Order>,
         },
      ],
   },
]);

export default router;
