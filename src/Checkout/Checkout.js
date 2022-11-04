import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Checkout = () => {
   const { title, price, _id } = useLoaderData();
   const { user } = useContext(AuthContext);

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = `${form.firstName.value} ${form.lastName.value}`;
      const email = form.email.value;
      const phone = form.phone.value;
      const message = form.message.value;
      console.log(name, email, phone, message);

      const order = {
         service: _id,
         serviceName: title,
         customerName: name,
         price,
         email,
         phone,
         message,
      };
      fetch('http://localhost:5000/orders', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(order),
      })
         .then((res) => res.json())
         .then((data) => console.log(data))
         .catch((error) => console.log(error));
   };

   return (
      <div>
         <section>
            <h1 className="text-2xl font-semibold text-center mb-8">Checkout</h1>
            <h2 className="text-xl  text-center">{title}</h2>
            <p className="text-center">{price}</p>

            <div className="relative mx-auto max-w-screen-lg m-16 ">
               <div className="">
                  <div className="bg-gray-100 py-12 md:py-24 rounded-lg">
                     <div className="mx-auto max-w-4xl px-4 lg:px-8">
                        <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
                           <div className="col-span-3">
                              <label className="mb-1 block text-sm text-gray-600" htmlFor="first_name">
                                 First Name
                              </label>

                              <input
                                 className="w-full rounded-lg border border-gray-200 p-2.5 text-sm shadow-sm"
                                 type="text"
                                 id="first_name"
                                 name="firstName"
                                 required
                              />
                           </div>

                           <div className="col-span-3">
                              <label className="mb-1 block text-sm text-gray-600" htmlFor="last_name">
                                 Last Name
                              </label>

                              <input
                                 className="w-full rounded-lg border border-gray-200 p-2.5 text-sm shadow-sm"
                                 type="text"
                                 id="last_name"
                                 name="lastName"
                                 required
                              />
                           </div>

                           <div className="col-span-3">
                              <label className="mb-1 block text-sm text-gray-600" htmlFor="email">
                                 Email
                              </label>

                              <input
                                 className="w-full rounded-lg border border-gray-200 p-2.5 text-sm shadow-sm"
                                 type="email"
                                 id="email"
                                 name="email"
                                 defaultValue={user?.email && user.email}
                                 readOnly
                              />
                           </div>

                           <div className="col-span-3">
                              <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                                 Phone
                              </label>

                              <input
                                 className="w-full rounded-lg border border-gray-200 p-2.5 text-sm shadow-sm"
                                 type="tel"
                                 id="phone"
                                 name="phone"
                                 required
                              />
                           </div>
                           <div className="col-span-6">
                              <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                                 Your Message
                              </label>

                              <textarea
                                 id="textArea"
                                 className="w-full rounded-lg border border-gray-200 p-2.5 text-sm shadow-sm"
                                 rows="10"
                                 cols="10"
                                 name="message"
                                 required
                              ></textarea>
                           </div>

                           <div className="col-span-6">
                              <button
                                 className="block w-full rounded-lg bg-orange-600 p-4 text-sm text-white"
                                 type="submit"
                              >
                                 Order Confirm
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Checkout;
