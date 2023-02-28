/* eslint-disable react/require-default-props */
import cutlery from '../../assets/icons/cutlery.svg';
import donut from '../../assets/icons/donut.svg';

type NotificationProps = {
  text: string;
  type: 'cake' | 'lunch';
  time?: string;
  kitchen?: string;
};

export default function Notification({
  text,
  type,
  time,
  kitchen,
}: NotificationProps) {
  return (
    <div className="h-20 mt-4 bg-blue-100 rounded-lg w-96">
      <div className="flex flex-row p-4">
        <img
          alt="icon"
          src={type === 'cake' ? donut : cutlery}
          className="w-12 duration-100 ease-in group-hover:scale-110"
        />
        <div className="pl-5">
          {type === 'lunch' ? (
            <div className="">{text} is going to lunch</div>
          ) : (
            <div className="">There is {text}</div>
          )}

          {time && <div className="">When: {time}</div>}
          {kitchen && <div className="">Where: {kitchen}</div>}
        </div>
      </div>
    </div>
  );
}
