import Notification from 'components/Notification';
import { firestore } from 'constants/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  async function getData() {
    const array = [];
    const colRef = collection(firestore, 'lunch');
    const docsSnap = await getDocs(colRef);

    docsSnap.forEach((doc) => {
      array.push([doc.data().text, doc.data().time]);
    });

    setData(array);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <div className="text-4xl font-bold">Home</div>

      {data.map((item) => (
        <Notification type="lunch" text={item[0]} time={item[1]} />
      ))}
    </div>
  );
}
