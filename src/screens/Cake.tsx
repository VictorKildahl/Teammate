import Notification from 'components/Notification';
import { firestore } from 'constants/Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';

export default function Cake() {
  const [name, setName] = useState('');
  const [whenWhere, setWhenWhere] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (name && whenWhere) {
      await addDoc(collection(firestore, 'notifications'), {
        type: 'cake',
        name,
        whenWhere,
        timestamp: serverTimestamp(),
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <div className="pb-10 text-4xl font-bold text-blue-100">Cake</div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row pb-5 ">
          <div className="pt-2 text-xl font-bold text-blue-100 w-44">
            Type of cake:
          </div>
          <input
            type="text"
            value={name}
            maxLength={25}
            className="mt-2 text-xl text-blue-100 bg-transparent border-b w-60 focus:outline-none "
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex flex-row ">
          <div className="pt-2 text-xl font-bold text-blue-100 w-44">
            Kitchen:
          </div>
          <input
            type="text"
            value={whenWhere}
            maxLength={25}
            className="mt-2 text-xl text-blue-100 bg-transparent border-b w-60 focus:outline-none "
            onChange={(event) => setWhenWhere(event.target.value)}
          />
        </div>
        <div className="flex justify-center w-full pt-10">
          <Notification type="cake" name={name} whenWhere={whenWhere} />
        </div>
        <button
          type="submit"
          className="w-full mt-10 font-bold text-blue-100 rounded-full bg-jysk-gradients-blue-dark h-14 hover:bg-jysk-gradients-blue-light"
        >
          Post notification
        </button>
      </form>
    </div>
  );
}
