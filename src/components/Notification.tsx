/* eslint-disable react/require-default-props */
import cutleryDark from '../../assets/icons/cutlery_dark.svg';
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
    <div
      className={
        type === 'cake'
          ? 'mt-4 duration-200 ease-in bg-blue-100 rounded-full h-14 w-96 '
          : 'mt-4 duration-200 ease-in bg-blue-400 rounded-full h-14 w-96 '
      }
    >
      <div className="flex flex-row p-1">
        <img
          alt="icon"
          src={type === 'cake' ? donut : cutleryDark}
          className="w-8 ml-4"
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
