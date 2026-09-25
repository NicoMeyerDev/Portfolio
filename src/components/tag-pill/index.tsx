import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './tag-pill.module.css';

interface TagPillProps {
  label: string;
  iconSrc?: string;
  variant?: 'light' | 'dark';
}

export default function TagPill({
  label,
  iconSrc,
  variant = 'light',
}: TagPillProps): JSX.Element {
  const resolvedIcon = useBaseUrl(iconSrc);
  return (
    <span className={clsx(styles.tagPill, styles[variant])}>
      {resolvedIcon && (
        <img className={styles.icon} src={resolvedIcon} alt="" />
      )}
      {label}
    </span>
  );
}
