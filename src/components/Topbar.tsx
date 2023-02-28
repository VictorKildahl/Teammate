import bigT from '../../assets/icons/bigT.png';
import jysk from '../../assets/icons/jysk.png';

export default function Topbar() {
  return (
    <div className="flex justify-between w-full px-8 pt-4 h-14">
      <div className="flex items-center justify-center ">
        <img alt="icon" src={bigT} className="flex w-8 h-8" />
        <div className="text-3xl text-blue-400">eammate</div>
      </div>
      <img alt="icon" src={jysk} className="flex w-20 h-10" />
    </div>
  );
}
