import Notification from 'components/Notification';

export default function Home() {
  return (
    <div className="flex justify-center pt-8 flex-col items-center">
      <div className="font-bold text-4xl">Home</div>

      <Notification text="Cake in kitchen 5.1.13" type="cake" />
      <Notification text="Victor is going to lunch now" type="lunch" />
      <Notification text="Cake in kitchen 5.1.13" type="cake" />
      <Notification text="Victor is going to lunch now" type="lunch" />
      <Notification text="Cake in kitchen 5.1.13" type="cake" />
    </div>
  );
}
