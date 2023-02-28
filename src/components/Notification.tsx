/* eslint-disable react/require-default-props */
import cutlery from '../../assets/icons/cutlery.svg';
import donut from '../../assets/icons/donut.svg';

type NotificationProps = {
  type: 'cake' | 'lunch';
  name: string;
  whenWhere: string;
};

export default function Notification({
  type,
  name,
  whenWhere,
}: NotificationProps) {
  return (
    <div className="mt-4 bg-blue-100 rounded-lg h-14 w-96">
      <div className="flex flex-row p-1">
        <img
          alt="icon"
          src={type === 'cake' ? donut : cutlery}
          className="w-8 duration-100 ease-in group-hover:scale-110"
        />
        <div className="pl-5">
          {type === 'lunch' ? (
            <>
              <div className="">{name} is going to lunch</div>
              <div className="">When: {whenWhere}</div>
            </>
          ) : (
            <>
              <div className="">There is {name}</div>
              <div className="">Where: {whenWhere}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
