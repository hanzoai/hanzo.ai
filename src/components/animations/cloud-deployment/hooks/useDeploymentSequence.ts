
import { useState } from "react";
import { NodeType, ConnectionType, NotificationType, ScanPointType } from "../types";
import { useDeploymentEntities } from "./useDeploymentEntities";
import { useScanPoints } from "./useScanPoints";
import { removeNotification as removeNotificationUtil } from "../utils/notificationUtils";

export const useDeploymentSequence = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const { nodes, connections } = useDeploymentEntities(setNotifications);
  const { scanPoints } = useScanPoints();

  // Remove notification
  const removeNotification = (id: string) => {
    removeNotificationUtil(setNotifications, id);
  };

  return {
    nodes,
    connections,
    scanPoints,
    notifications,
    removeNotification
  };
};
