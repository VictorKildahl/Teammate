import BottomNavigation from 'components/BottomNavigation';
import Topbar from 'components/Topbar';
import { firestore } from 'constants/Firebase';
import { collection } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import Cake from 'screens/Cake';
import Canteen from 'screens/Canteen';
import Home from 'screens/Home';
import Lunch from 'screens/Lunch';
import './App.css';

export default function App() {
  const colRef = useMemo(() => collection(firestore, 'notifications'), []);
  const [notifications] = useCollectionData(colRef);
  const [prevObject, setPrevObject] = useState(null);

  useEffect(() => {
    const latestNotification = [...(notifications ?? [])].sort(
      (a, b) => b.timestamp?.seconds - a.timestamp?.seconds
    )[0];

    if (
      latestNotification &&
      prevObject?.timestamp.seconds !== latestNotification.timestamp.seconds
    ) {
      if ('Notification' in window) {
        try {
          if (Notification.permission === 'granted') {
            // eslint-disable-next-line no-new
            new Notification('Teammate', {
              body:
                latestNotification.type === 'cake'
                  ? `There is ${latestNotification.name} \nWhere: ${latestNotification.whenWhere}`
                  : `${latestNotification.name} is going to lunch \nWhen: ${latestNotification.whenWhere}`,
            });
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission()
              .then((permission) => {
                if (permission === 'granted') {
                  // eslint-disable-next-line no-new
                  new Notification('Teammate', {
                    body:
                      latestNotification.type === 'cake'
                        ? `There is ${latestNotification.name} in ${latestNotification.whenWhere}`
                        : `${latestNotification.name} is going to lunch ${latestNotification.whenWhere}`,
                  });
                }
                return permission;
              })
              .catch((e) => console.log('Error requesting permission:', e));
          }
        } catch (e) {
          console.log('Error displaying notification:', e);
        }
      }
      setPrevObject(latestNotification);
    }
  }, [notifications, prevObject]);

  return (
    <div className="h-screen bg-gradient-to-b from-jysk to-jysk-brand-400">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canteen" element={<Canteen />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/lunch" element={<Lunch />} />
        </Routes>
        <BottomNavigation />
      </Router>
    </div>
  );
}
