import Notification from 'components/Notification';
import { firestore } from 'constants/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const lunchRef = collection(firestore, 'lunch');
  const cakeRef = collection(firestore, 'cake');

  async function getData() {
    const array = [];
    const lunchSnap = await getDocs(lunchRef);
    const cakeSnap = await getDocs(cakeRef);

    lunchSnap.forEach((doc) => {
      array.push([
        doc.data().name,
        doc.data().time,
        doc.data().timestamp,
        doc.data().type,
      ]);
    });

    cakeSnap.forEach((doc) => {
      array.push([
        doc.data().typeOfCake,
        doc.data().kitchen,
        doc.data().timestamp,
        doc.data().type,
      ]);
    });

    array.sort((a, b) => b[2].seconds - a[2].seconds);
    setData(array);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <div className="text-4xl font-bold">Home</div>

      {data.map((item) =>
        item[3] === 'lunch' ? (
          <Notification type={item[3]} text={item[0]} time={item[1]} />
        ) : (
          <Notification type={item[3]} text={item[0]} kitchen={item[1]} />
        )
      )}
    </div>
  );
}
