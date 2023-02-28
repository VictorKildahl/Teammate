import bigT from '../../assets/icons/bigT.png';
import jysk from '../../assets/icons/jysk.png';

export default function Topbar() {
  return (
    <div className="flex justify-start w-full pl-8 space-x-80 h-14 ">
      <div className="flex flex-row border-b-2 border-blue-400">
        <img alt="icon" src={bigT} className="flex w-8 pt-2 pb-2" />

        <div className="pt-3 text-2xl text-blue-400 ">eammate</div>
      </div>
      <img alt="icon" src={jysk} className="flex pt-2 pb-2" />
    </div>
  );
}
