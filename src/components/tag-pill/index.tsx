import React from 'react';
import clsx from 'clsx';
import styles from './tag-pill.module.css';

interface TagPillProps {
  label: string;
  icon?: React.ReactNode;
  variant?: 'light' | 'dark';
}

export default function TagPill({
  label,
  icon,
  variant = 'light',
}: TagPillProps): JSX.Element {
  return (
    <span className={clsx(styles.tagPill, styles[variant])}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </span>
  );
}
