import React from 'react';
import classes from './Card.module.css';

type CardProps = {
  className?: string
}

const Card: React.FC<CardProps> = (props) => {

  const classNames = [classes.card];
  if (props.className) {
    classNames.push(props.className)
  }

  return (
    <section className={classNames.join(' ')}>
      {props.children}
    </section>
  );
};

export default Card;