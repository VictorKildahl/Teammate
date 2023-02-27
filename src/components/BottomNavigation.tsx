import book from '../../assets/icons/book.svg';
import cake from '../../assets/icons/cake.svg';
import cutlery from '../../assets/icons/cutlery.svg';

export default function BottomNavigation() {
  return (
    <div className="w-full h-screen">
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        <div id="tabs" className="flex justify-between">
          <a
            href="/"
            className="flex flex-col  w-full focus:bg-blue-200 hover:bg-blue-200 justify-center text-center pt-2 pb-1"
          >
            <img alt="icon" src={book} className="w-8" />
            <span className="tab tab-home block text-xs">Canteen</span>
          </a>
          <a
            href="/"
            className="w-full focus:bg-blue-200 hover:bg-blue-200 justify-center inline-block text-center pt-2 pb-1"
          >
            <img alt="icon" src={cake} className="w-8" />
            <span className="tab tab-kategori block text-xs">Cake</span>
          </a>
          <a
            href="/"
            className="w-full focus:bg-blue-200 hover:bg-blue-200 justify-center inline-block text-center pt-2 pb-1"
          >
            <img alt="icon" src={cutlery} className="w-8" />
            <span className="tab tab-explore block text-xs">Lunch</span>
          </a>
        </div>
      </section>
    </div>
  );
}
