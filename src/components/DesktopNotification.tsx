import React, { useEffect } from 'react';
import cutlery from '../../assets/icons/cutlery.svg';
import cake from '../../assets/icons/cake.svg';
import t from '../../assets/icons/t.png';

type DesktopNotificationProps = {
  type: 'cake' | 'lunch';
  body: string;
};

export default function DesktopNotification({
  type,
  body,
}: DesktopNotificationProps) {
  useEffect(() => {
    if ('Notification' in window) {
      try {
        if (Notification.permission === 'granted') {
          new Notification('Teammate', {
            body,
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission()
            .then((permission) => {
              if (permission === 'granted') {
                new Notification('Teammate', {
                  body,
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
  }, []);

  return <div>Notification example</div>;
}
