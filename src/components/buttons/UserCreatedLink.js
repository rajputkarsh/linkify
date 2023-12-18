'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLink } from '@fortawesome/free-solid-svg-icons';

function UserCreatedLink({ link, ping }) {
  const handleClick = () => {
    fetch(ping, { method: 'POST' });
    window.open(link?.url, '_blank');
  };

  return (
    <Link
      key={link.url}
      target="_blank"
      onClick={handleClick}
      className="bg-indigo-800 p-2 block flex"
      href={''}
    >
      <div className="relative -left-4 overflow-hidden w-16">
        <div className="w-16 h-16 bg-blue-700 aspect-square relative flex items-center justify-center aspect-square">
          {link.icon && (
            <Image
              className="w-full h-full object-cover"
              src={link.icon}
              alt={'icon'}
              width={64}
              height={64}
              priority={false}
            />
          )}
          {!link.icon && <FontAwesomeIcon icon={faLink} className="w-8 h-8" />}
        </div>
      </div>
      <div className="flex items-center justify-center shrink grow-0 overflow-hidden">
        <div>
          <h3>{link.title}</h3>
          <p className="text-white/50 h-6 overflow-hidden">{link.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default UserCreatedLink;
