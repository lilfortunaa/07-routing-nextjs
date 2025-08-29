'use client';
import Link from 'next/link';
import styles from './TagsMenu.module.css';
import { NoteTag } from '@/types/note';

const tags: (NoteTag | 'All')[] = [
  'All',
  'Todo',
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
];

export default function TagsMenu() {
  return (
    <div className={styles.menuContainer}>
      <button className={styles.menuButton}>Notes ▾</button>
      <ul className={styles.menuList}>
        {tags.map(tag => (
          <li key={tag} className={styles.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={styles.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
