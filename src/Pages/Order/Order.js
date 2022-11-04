import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import OrderRow from './OrderRow';

const Order = () => {
   const { user } = useContext(AuthContext);
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:5000/orders?email=${user?.email}`)
         .then((res) => res.json())
         .then((data) => setOrders(data));
   }, [user?.email]);

   const handleDelete = (id) => {
      const proceed = window.confirm('are you want to delete this order?');
      if (proceed) {
         fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount > 0) {
                  alert('Delete sucesfull');
                  const remaining = orders.filter((order) => order._id !== id);
                  setOrders(remaining);
               }
            });
      }
   };

   const handleStatusUpdate = (id) => {
      fetch(`http://localhost:5000/orders/${id}`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify({ status: 'Approved' }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
               const remaining = orders.filter((order) => order._id !== id);
               const modified = orders.find((order) => order._id === id);
               modified.status = 'Approved';
               const newOrders = [modified, ...remaining];
               setOrders(newOrders);
            }
         });
   };

   return (
      <div>
         <div className="flex flex-col max-w-5xl mx-auto my-14 p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-300">
               {orders.map((order) => (
                  <OrderRow
                     key={order._id}
                     order={order}
                     handleDelete={handleDelete}
                     handleStatusUpdate={handleStatusUpdate}
                  ></OrderRow>
               ))}
            </ul>
            <div className="space-y-1 text-right">
               <p>
                  Total amount:
                  <span className="font-semibold">357 €</span>
               </p>
               <p className="text-sm text-gray-600">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end space-x-4">
               <button type="button" className="px-6 py-2 border rounded-md border-orange-600">
                  Back
                  <span className="sr-only sm:not-sr-only">to shop</span>
               </button>
               <button
                  type="button"
                  className="px-6 py-2 border rounded-md bg-orange-600 text-gray-50 border-orange-600"
               >
                  <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
               </button>
            </div>
         </div>
      </div>
   );
};

export default Order;
