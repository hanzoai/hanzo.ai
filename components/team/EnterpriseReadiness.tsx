'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import {
  Briefcase,
  Building,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Users,
  ArrowRight
} from "lucide-react";
import { Card, CardHeader, CardContent } from "@hanzo/ui";

const EnterpriseReadiness = () => {
  const enterpriseFeatures = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Custom Deployment",
      description: "On-premises, private cloud, or hybrid deployment options to meet your specific security and compliance requirements."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Management",
      description: "Comprehensive tools for managing teams, permissions, and access controls across your organization."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Data Sovereignty",
      description: "Control where your data is stored and processed to meet regional compliance requirements."
    },
    {
      icon: <BadgeCheck className="h-8 w-8" />,
      title: "Custom AI Training",
      description: "Train AI agents on your proprietary data and workflows for specialized domain expertise."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock dedicated support team and guaranteed response times for critical issues."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Implementation Services",
      description: "Professional services for integration, migration, and onboarding with your existing systems."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex p-2 rounded-full mb-4"
            style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)", color: "var(--primary)" }}
          >
            <Briefcase className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Enterprise Ready
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hanzo Team is built from the ground up for enterprise deployments,
            with the security, scalability, and support your organization requires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border border-border backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div
                    className="p-3 rounded-lg inline-flex mb-4"
                    style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-8 text-center"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)" }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to equip your enterprise?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact our enterprise sales team for a personalized demo and custom pricing that meets your organization's unique needs.
          </p>
          <Button
            size="lg"
            className="text-primary-foreground"

          >
            Contact Enterprise Sales
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseReadiness;
