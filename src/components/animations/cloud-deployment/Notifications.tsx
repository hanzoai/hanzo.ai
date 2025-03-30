
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Cloud } from "lucide-react";
import { NotificationType } from "./types";

interface NotificationsProps {
  notifications: NotificationType[];
  onDismiss: (id: string) => void;
}

const Notifications: React.FC<NotificationsProps> = ({ notifications, onDismiss }) => {
  return (
    <div className="absolute top-2 right-2 z-30 flex flex-col space-y-2 max-w-xs">
      <AnimatePresence>
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className={`rounded-md p-3 shadow-lg ${
              notification.type === 'success' ? 'bg-gray-900/90 border border-gray-700' :
              notification.type === 'error' ? 'bg-red-900/80 border border-red-700' :
              'bg-blue-900/80 border border-blue-700'
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                {notification.type === 'success' && <Check className="h-4 w-4 text-green-400" />}
                {notification.type === 'error' && <X className="h-4 w-4 text-red-400" />}
                {notification.type === 'info' && <Cloud className="h-4 w-4 text-blue-400" />}
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium text-neutral-100">{notification.title}</p>
                <p className="text-xs text-neutral-300">{notification.message}</p>
              </div>
              <button 
                className="ml-4 flex-shrink-0 text-neutral-400 hover:text-neutral-300"
                onClick={() => onDismiss(notification.id)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;
