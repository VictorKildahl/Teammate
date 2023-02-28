import cutlery from '../../assets/icons/cutlery.svg';
import donut from '../../assets/icons/donut.svg';

type NotificationProps = {
  text: string;
  type: 'cake' | 'lunch';
  time?: string;
};

export default function Notification({ text, type, time }: NotificationProps) {
  return (
    <div className="flex items-center justify-center w-1/2 h-20 mt-4 bg-blue-100 rounded-lg">
      <div className="px-4">
        <img
          alt="icon"
          src={type === 'cake' ? donut : cutlery}
          className="w-12 duration-100 ease-in group-hover:scale-110"
        />
      </div>
      <div className="">{text}</div>
      {time && <div className="pl-4">{time}</div>}
    </div>
  );
}
