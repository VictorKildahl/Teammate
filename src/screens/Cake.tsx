import { firestore } from 'constants/Firebase';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import Notification from 'components/Notification';

export default function Cake() {
  const [kitchen, setKitchen] = useState('');
  const [typeOfCake, setTypeOfCake] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await addDoc(collection(firestore, 'cake'), {
      text: `There is ${typeOfCake} in ${kitchen}`,
      typeOfCake,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <div className="pb-10 font-mono text-4xl ">Cake</div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row pb-5 ">
          <div className="w-56 pt-2 font-mono text-2xl">Type of cake:</div>
          <input
            type="text"
            value={typeOfCake}
            className="w-56 mt-2 font-mono text-2xl bg-transparent border-b focus:outline-none focus:border-green-400 hover:border-green-400"
            onChange={(event) => setTypeOfCake(event.target.value)}
          />
        </div>
        <div className="flex flex-row ">
          <div className="w-56 pt-2 font-mono text-2xl">Kitchen:</div>
          <input
            type="text"
            value={kitchen}
            className="w-56 mt-2 font-mono text-2xl bg-transparent border-b focus:border-green-400 focus:outline-none hover:border-green-400"
            onChange={(event) => setKitchen(event.target.value)}
          />
        </div>
        <div className="flex justify-center w-full pt-10">
          <Notification text={typeOfCake} type="cake" />
        </div>
        <button
          type="submit"
          className="w-full mt-10 border rounded h-14 hover:bg-jysk-brand-400"
        >
          Post notification
        </button>
      </form>
    </div>
  );
}

// <div className="flex flex-col items-center justify-center pt-8">
//       <div className="pb-10 font-mono text-4xl ">Lunch</div>
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-row pb-5 ">
//           <div className="w-56 pt-2 font-mono text-2xl">Name:</div>
//           <input
//             type="text"
//             value={name}
//             className="w-56 mt-2 font-mono text-2xl bg-transparent border-b focus:outline-none focus:border-green-400 hover:border-green-400"
//             onChange={(event) => setName(event.target.value)}
//           />
//         </div>
//         <div className="flex flex-row ">
//           <div className="w-56 pt-2 font-mono text-2xl">Time:</div>
//           <input
//             type="text"
//             value={time}
//             className="w-56 mt-2 font-mono text-2xl bg-transparent border-b focus:border-green-400 focus:outline-none hover:border-green-400"
//             onChange={(event) => setTime(event.target.value)}
//           />
//         </div>
//         <div className="flex justify-center w-full pt-10">
//           <Notification text={name} type="lunch" />
//         </div>
//         <button
//           type="submit"
//           className="w-full mt-10 border rounded h-14 hover:bg-jysk-brand-400"
//         >
//           Post notification
//         </button>
//       </form>
//     </div>
