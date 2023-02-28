import Notification from 'components/Notification';
import { firestore } from 'constants/Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';

export default function Cake() {
  const [name, setName] = useState('');
  const [whenWhere, setWhenWhere] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await addDoc(collection(firestore, 'notifications'), {
      type: 'cake',
      name,
      whenWhere,
      timestamp: serverTimestamp(),
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
            value={name}
            className="w-56 mt-2 font-mono text-2xl bg-transparent border-b focus:outline-none focus:border-green-400 hover:border-green-400"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex flex-row ">
          <div className="w-56 pt-2 font-mono text-2xl">Kitchen:</div>
          <input
            type="text"
            value={whenWhere}
            className="w-56 mt-2 font-mono text-2xl bg-transparent border-b focus:border-green-400 focus:outline-none hover:border-green-400"
            onChange={(event) => setWhenWhere(event.target.value)}
          />
        </div>
        <div className="flex justify-center w-full pt-10">
          <Notification type="cake" name={name} whenWhere={whenWhere} />
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
