import React from 'react';
import donut from '../../assets/icons/donut.svg';
import cutlery from '../../assets/icons/cutlery.svg';

type NotificationProps = {
  text: string;
  type: 'cake' | 'lunch';
};

export default function Notification({ text, type }: NotificationProps) {
  return (
    <div className="flex justify-center items-center w-1/2 h-20 bg-blue-100 mt-4 rounded-lg">
      <div className="px-4">
        <img
          alt="icon"
          src={type === 'cake' ? donut : cutlery}
          className="w-12 group-hover:scale-110 ease-in duration-100"
        />
      </div>
      <div className="">{text}</div>
    </div>
  );
}
