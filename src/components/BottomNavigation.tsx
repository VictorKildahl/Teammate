import { Link } from 'react-router-dom';
import home from '../../assets/icons/home.svg';
import book from '../../assets/icons/book.svg';
import cake from '../../assets/icons/cake.svg';
import cutlery from '../../assets/icons/cutlery.svg';

export default function BottomNavigation() {
  return (
    <div className="w-full">
      <section className="fixed inset-x-0 bottom-0 block shadow text-[#11585d]">
        <nav className="border-t border-jysk-brand-500">
          <div id="tabs" className="flex justify-between pt-2 pb-2">
            <Link
              to="/"
              className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center group "
            >
              <img
                alt="icon"
                src={home}
                className="w-8 pb-2 duration-100 ease-in group-hover:scale-125 "
              />
              <span className="block text-xs duration-100 ease-in tab tab-home group-hover:scale-125">
                Home
              </span>
            </Link>
            <Link
              to="/canteen"
              className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center group"
            >
              <img
                alt="icon"
                src={book}
                className="w-8 pb-2 duration-100 ease-in group-hover:scale-125 "
              />
              <span className="block text-xs duration-100 ease-in tab tab-home group-hover:scale-125">
                Canteen
              </span>
            </Link>
            <Link
              to="/cake"
              className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center group"
            >
              <img
                alt="icon"
                src={cake}
                className="w-8 pb-2 duration-100 ease-in group-hover:scale-125"
              />
              <span className="block text-xs duration-100 ease-in tab tab-kategori group-hover:scale-125">
                Cake
              </span>
            </Link>
            <Link
              to="/lunch"
              className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-center group"
            >
              <img
                alt="icon"
                src={cutlery}
                className="w-8 pb-2 duration-100 ease-in group-hover:scale-125"
              />
              <span className="block text-xs duration-100 ease-in tab tab-explore group-hover:scale-125">
                Lunch
              </span>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
}
