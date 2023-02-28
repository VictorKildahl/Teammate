import { firestore } from 'constants/Firebase';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

export default function Cake() {
  const [kitchen, setKitchen] = useState('');
  const [typeOfCake, setTypeOfCake] = useState('cake');

  async function handleSubmit(event) {
    event.preventDefault();

    await addDoc(collection(firestore, 'cake'), {
      text: `There is ${typeOfCake} in ${kitchen}`,
      typeOfCake,
    });
  }

  return (
    <div className="flex justify-center items-center flex-col pt-8">
      <div className="font-bold text-4xl">Cake</div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col"
      >
        <div>Type of cake</div>
        <input
          type="text"
          value={typeOfCake}
          className="mt-2"
          onChange={(event) => setTypeOfCake(event.target.value)}
        />
        <div>Kitchen</div>
        <input
          type="text"
          value={kitchen}
          className="mt-2"
          onChange={(event) => setKitchen(event.target.value)}
        />
        <button type="submit" className="mt-2">
          Post notification
        </button>
      </form>
    </div>
  );
}
