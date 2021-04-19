import React from 'react';
import classes from './Notification.module.css';
import { NotificationInterface } from '../../store/uiSlice';

type NotificationProps = NotificationInterface

const Notification: React.FC<NotificationProps> = (props) => {

  const classNames = [classes.notification];
  if (props.status === 'error') {
    classNames.push(classes.error);
  } else if (props.status === 'success') {
    classNames.push(classes.success);
  }

  return (
    <section className={classNames.join(' ')}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;