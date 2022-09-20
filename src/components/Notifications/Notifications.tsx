import React, { useState } from "react";

import notificationData from "../../data/NotificationData";
import Card from "../Card/Card";
import {
  NotificationContainer,
  Header,
  Container,
} from "./Notifications.styled";

const Notifications = () => {
  const [allNotifications, setAllNotifications] = useState([
    ...notificationData,
  ]);

  const markAsRead = (id: number) => {
    let [selected] = allNotifications.filter((data) => data.id === id);
    selected.isRead = true;
    setAllNotifications([...allNotifications]);
  };

  const getUnread = () => {
    return allNotifications.filter((data) => !data.isRead).length;
  };

  const markAllAsRead = () => {
    allNotifications.map((data) => (data.isRead = true));
    setAllNotifications([...allNotifications]);
  };

  return (
    <Container>
      <NotificationContainer>
        <Header>
          <div>
            <h1>
              Notifications {getUnread() ? <span>{getUnread()}</span> : ""}
            </h1>
          </div>
          <button onClick={markAllAsRead}>Mark all as read</button>
        </Header>
        {allNotifications.map((data) => {
          return (
            <li key={data.id}>
              <Card markAsRead={markAsRead} data={data} />
            </li>
          );
        })}
      </NotificationContainer>
    </Container>
  );
};

export default Notifications;
