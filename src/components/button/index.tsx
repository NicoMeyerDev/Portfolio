import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  href?: string;
  // Opens the link in a new tab (for external URLs).
  external?: boolean;
  // Downloads the linked file instead of navigating to it.
  download?: boolean | string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  external = false,
  download = false,
  onClick,
  type = 'button',
  className,
}: ButtonProps): JSX.Element {
  const classes = clsx(styles.button, styles[variant], className);

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        download={download ? download : undefined}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
