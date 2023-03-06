/* eslint-disable react/require-default-props */
import cutleryDark from '../../assets/icons/cutlery_dark.svg';
import cakeDark from '../../assets/icons/cake_dark.svg';

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
          ? 'mt-4 duration-200 ease-in bg-[#38d0c9] rounded-xl h-14 w-96 hover:shadow-xl '
          : 'mt-4 duration-200 ease-in bg-[#23a9a3] rounded-xl h-14 w-96 hover:shadow-xl'
      }
    >
      <div className="flex flex-row p-1">
        <img
          alt="icon"
          src={type === 'cake' ? cakeDark : cutleryDark}
          className="w-8 ml-4 "
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
