
import React from "react";
import WorkspaceHeader from "./workspace/WorkspaceHeader";
import ProjectManagementCard from "./workspace/ProjectManagementCard";
import TeamChatCard from "./workspace/TeamChatCard";
import VideoMeetingsCard from "./workspace/VideoMeetingsCard";
import KnowledgeBaseCard from "./workspace/KnowledgeBaseCard";
import WorkspaceFooter from "./workspace/WorkspaceFooter";

const WorkspaceIntegration = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <WorkspaceHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ProjectManagementCard />
          <TeamChatCard />
          <VideoMeetingsCard />
          <KnowledgeBaseCard />
        </div>

        <WorkspaceFooter />
      </div>
    </section>
  );
};

export default WorkspaceIntegration;
