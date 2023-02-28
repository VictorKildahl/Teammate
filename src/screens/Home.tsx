import Notification from 'components/Notification';
import { firestore } from 'constants/Firebase';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Home() {
  const colRef = collection(firestore, 'notifications');
  const [notifications] = useCollectionData(colRef);

  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <div className="text-4xl font-bold">Home</div>

      {notifications &&
        notifications
          .sort((a, b) => b.timestamp.seconds - a.timestamp.seconds)
          .map((notification) => (
            <Notification
              type={notification.type}
              name={notification.name}
              whenWhere={notification.whenWhere}
            />
          ))}
    </div>
  );
}
