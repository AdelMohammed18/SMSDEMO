import { Layout } from "@/components/layout/Layout";
import { OpeningStatement } from "@/components/sections/OpeningStatement";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { BackupSection } from "@/components/sections/BackupSection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { OnlineSupportSection } from "@/components/sections/OnlineSupportSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <OpeningStatement />
      <ExperienceSection />
      <SupportSection />
      <SecuritySection />
      <InfrastructureSection />
      <BackupSection />
      <CollaborationSection />
      <OnlineSupportSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
