import React from 'react';

export default function Canteen() {
  return (
    <div className="flex flex-col pt-6 text-blue-100">
      <div className="flex items-center justify-center text-4xl font-bold">
        Canteen plan
      </div>

      <div className="flex items-center justify-center text-2xl">Week 9</div>

      <div className="pt-2 pl-5 text-xl font-bold underline">Monday</div>
      <div className="pl-10 text-lg">Chicken Marengo with rice</div>
      <div className="pl-10 text-lg">Croissant with Shrimp salad</div>

      <div className="pt-2 pl-5 text-xl font-bold underline">Tuesday</div>
      <div className="pl-10 text-lg">
        Spareribs with Coleslaw and French Fries
      </div>
      <div className="pl-10 text-lg">Terrine of white Fish</div>

      <div className="pt-2 pl-5 text-xl font-bold underline">Wednesday</div>
      <div className="pl-10 text-lg">
        Chili con Carne with rice, salsa and sour cream
      </div>
      <div className="pl-10 text-lg">
        Salmon with Sesame seeds and soya sauce
      </div>

      <div className="pt-2 pl-5 text-xl font-bold underline">Thursday</div>
      <div className="pl-10 text-lg">Pasta Carbonara</div>
      <div className="pl-10 text-lg">Tuna Moussé on salad</div>

      <div className="pt-2 pl-5 text-xl font-bold underline ">Friday</div>
      <div className="pl-10 text-lg">Pita Bread with Chicken</div>
    </div>
  );
}
