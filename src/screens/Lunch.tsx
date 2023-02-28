import { firestore } from 'constants/Firebase';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

export default function Lunch() {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await addDoc(collection(firestore, 'lunch'), {
      text: `${name} is going to lunch`,
      time,
    });
  }

  return (
    <div className="flex justify-center items-center flex-col pt-8">
      <div className="font-bold text-4xl">Lunch</div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col"
      >
        <div>Name</div>
        <input
          type="text"
          value={name}
          className="mt-2"
          onChange={(event) => setName(event.target.value)}
        />
        <div>Time</div>
        <input
          type="text"
          value={time}
          className="mt-2"
          onChange={(event) => setTime(event.target.value)}
        />
        <button type="submit" className="mt-2">
          Post notification
        </button>
      </form>
    </div>
  );
}
