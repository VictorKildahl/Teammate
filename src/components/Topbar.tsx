import bigMascot from '../../assets/icons/bigMascot.png';
import power from '../../assets/icons/power.svg';
const { ipcRenderer } = window.require('electron');

export default function Topbar() {
  return (
    <div className="flex justify-between w-full px-4 pt-4 h-14">
      <img alt="icon" src={bigMascot} className="flex w-32 h-32" />

      <button
        type="button"
        className="pr-4"
        onClick={() => {
          ipcRenderer.send('closeApp');
        }}
      >
        <img
          alt="icon"
          src={power}
          className="w-6 duration-100 ease-in hover:scale-125"
        />
      </button>
    </div>
  );
}
