import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-slate-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-bold tracking-widest text-slate-800">
        Pirate's Pizza
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;