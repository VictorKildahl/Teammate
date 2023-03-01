import BottomNavigation from 'components/BottomNavigation';
import Topbar from 'components/Topbar';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import Cake from 'screens/Cake';
import Canteen from 'screens/Canteen';
import Home from 'screens/Home';
import Lunch from 'screens/Lunch';
import './App.css';
import { firestore } from 'constants/Firebase';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from 'react';
import deepEqual from 'deep-equal';

export default function App() {
  const colRef = collection(firestore, 'notifications');
  const [notifications] = useCollectionData(colRef);
  const [prevObject, setPrevObject] = useState(null);
  const latestNotification = notifications?.sort(
    (a, b) => b.timestamp?.seconds - a.timestamp?.seconds
  )[0];

  useEffect(() => {
    if (notifications !== null && !deepEqual(prevObject, notifications)) {
      if ('Notification' in window) {
        try {
          if (Notification.permission === 'granted') {
            new Notification('Teammate', {
              body:
                latestNotification.type === 'cake'
                  ? `There is ${latestNotification.name} in ${latestNotification.whenWhere}`
                  : `${latestNotification.name} is going to lunch in ${latestNotification.whenWhere}`,
            });
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission()
              .then((permission) => {
                if (permission === 'granted') {
                  new Notification('Teammate', {
                    body:
                      latestNotification.type === 'cake'
                        ? `There is ${latestNotification.name} in ${latestNotification.whenWhere}`
                        : `${latestNotification.name} is going to lunch in ${latestNotification.whenWhere}`,
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
    }
    setPrevObject(notifications);
  }, [notifications]);

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
