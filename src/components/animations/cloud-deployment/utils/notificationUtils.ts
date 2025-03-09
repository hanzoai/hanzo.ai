
import { NotificationType } from "../types";

export const addNotification = (
  setNotifications: React.Dispatch<React.SetStateAction<NotificationType[]>>,
  title: string, 
  message: string, 
  type: "success" | "error" | "info" = "success"
) => {
  const newNotification = {
    id: `notification-${Date.now()}`,
    title,
    message,
    type,
    timestamp: new Date()
  };
  
  setNotifications(prev => [newNotification, ...prev].slice(0, 3));
  
  // Auto-remove notification after 5 seconds
  setTimeout(() => {
    setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
  }, 5000);
};

export const removeNotification = (
  setNotifications: React.Dispatch<React.SetStateAction<NotificationType[]>>,
  id: string
) => {
  setNotifications(prev => prev.filter(n => n.id !== id));
};
