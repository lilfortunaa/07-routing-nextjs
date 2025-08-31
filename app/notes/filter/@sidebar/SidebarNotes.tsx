'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NoteTag } from '@/types/note';
import css from './SidebarNotes.module.css';

const tags: (NoteTag | 'All')[] = [
  'All',
  'Todo',
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
];

export default function SidebarMenu() {
  const pathname = usePathname() ?? '';

  const activeTag = (() => {
    const match = pathname.match(/^\/notes\/filter\/([^/]+)/);
    return match ? decodeURIComponent(match[1]) : pathname === '/notes' ? 'All' : '';
  })();

  return (
    <nav className={css.sidebarNav} aria-label="Notes sidebar">
      <ul className={css.menuList}>
        <li className={css.menuHeader}>All notes</li>
        <li className={css.menuItem}>
          <Link
            href="/notes"
            className={`${css.menuLink} ${activeTag === 'All' ? css.active : ''}`}
          >
            All
          </Link>
        </li>
        <li className={css.menuHeader}>Tags</li>
        {tags.filter(tag => tag !== 'All').map(tag => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag}`}
              className={`${css.menuLink} ${activeTag === tag ? css.active : ''}`}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
