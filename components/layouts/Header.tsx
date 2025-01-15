import Link from 'next/link';
import { navigation } from '@/constants/navigations';

export default function Header() {
  return (
    <header id='header'>
      <nav className='c_inner gnb_nav'>
        <ul className='gnb_list'>
          {navigation.map(
            ({ path, label, children }) =>
              label && (
                <li key={label}>
                  <Link href={children ? `${path}/${children[0].path}` : path}>
                    {label}
                  </Link>
                </li>
              ),
          )}
        </ul>
      </nav>
    </header>
  );
}
