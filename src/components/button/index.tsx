import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className,
}: ButtonProps): JSX.Element {
  const classes = clsx(styles.button, styles[variant], className);

  if (href) {
    return (
      <a className={classes} href={href}>
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
