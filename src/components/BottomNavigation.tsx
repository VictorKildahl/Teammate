import { Link } from 'react-router-dom';
import home from '../../assets/icons/home.svg';
import book from '../../assets/icons/book.svg';
import cake from '../../assets/icons/cake.svg';
import cutlery from '../../assets/icons/cutlery.svg';

export default function BottomNavigation() {
  return (
    <div className="w-full h-screen">
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-10 shadow"
      >
        <nav className="border-t border-jysk-brand-500">
          <div id="tabs" className="flex justify-between pt-2 pb-2">
            <Link
              to="/"
              className="flex items-center flex-col w-full justify-center text-center pt-2 pb-1 group"
            >
              <img
                alt="icon"
                src={home}
                className="w-8 pb-2 group-hover:scale-110 ease-in duration-100"
              />
              <span className="tab tab-home block text-xs">Home</span>
            </Link>
            <Link
              to="/canteen"
              className="flex items-center flex-col w-full justify-center text-center pt-2 pb-1 group"
            >
              <img
                alt="icon"
                src={book}
                className="w-8 pb-2 group-hover:scale-110 ease-in duration-100"
              />
              <span className="tab tab-home block text-xs">Canteen</span>
            </Link>
            <Link
              to="/cake"
              className="flex items-center flex-col w-full justify-center text-center pt-2 pb-1 group"
            >
              <img
                alt="icon"
                src={cake}
                className="w-8 pb-2 group-hover:scale-110 ease-in duration-100"
              />
              <span className="tab tab-kategori block text-xs">Cake</span>
            </Link>
            <Link
              to="/lunch"
              className="flex items-center flex-col w-full justify-center text-center pt-2 pb-1 group"
            >
              <img
                alt="icon"
                src={cutlery}
                className="w-8 pb-2 group-hover:scale-110 ease-in duration-100"
              />
              <span className="tab tab-explore block text-xs">Lunch</span>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
}
