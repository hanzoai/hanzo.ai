
import { useState } from "react";
import { NotificationType } from "../types";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  // Add notification
  const addNotification = (title: string, message: string, type: "success" | "error" | "info" = "success") => {
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

  // Remove notification
  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return {
    notifications,
    addNotification,
    removeNotification
  };
};
