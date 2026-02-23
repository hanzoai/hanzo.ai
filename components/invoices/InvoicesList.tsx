'use client'


import React, { useState } from "react";
import { Button } from "@hanzo/ui";
import { Download, Filter, Calendar, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@hanzo/ui";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

interface Invoice {
  id: string;
  date: string;
  dueDate: string;
  amount: string;
  status: "Paid" | "Due" | "Overdue" | "Processing";
}

const InvoicesList = () => {
  const [filter, setFilter] = useState("all");
  
  // Mock data for invoices
  const invoices: Invoice[] = [
    {
      id: "INV-20230301",
      date: "Mar 1, 2023",
      dueDate: "Mar 15, 2023",
      amount: "$20.00",
      status: "Paid"
    },
    {
      id: "INV-20230401",
      date: "Apr 1, 2023",
      dueDate: "Apr 15, 2023",
      amount: "$20.00",
      status: "Paid"
    },
    {
      id: "INV-20230501",
      date: "May 1, 2023",
      dueDate: "May 15, 2023",
      amount: "$25.00",
      status: "Paid"
    }
  ];

  const filteredInvoices = invoices.filter(invoice => {
    if (filter === "all") return true;
    return invoice.status.toLowerCase() === filter;
  });

  const statusColors = {
    Paid: "bg-white/30 text-white/70",
    Due: "bg-white/20 text-white/50",
    Overdue: "bg-white/10 text-white/40",
    Processing: "bg-white/15 text-white/60"
  };

  return (
    <motion.div 
      variants={cardAnimation}
      className="rounded-xl border border-gray-800 bg-[var(--black)]/60 overflow-hidden"
    >
      <div className="p-6 border-b border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-neutral-400" />
          <div className="space-y-1">
            <h3 className="text-xl font-medium">Invoice History</h3>
            <p className="text-sm text-neutral-400">View and download past invoices</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-gray-700 bg-[var(--black)] hover:bg-gray-900">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          
          <Button className="bg-[var(--white)] hover:bg-gray-200 text-black">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>
      
      {filteredInvoices.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-[var(--black)]">
              <TableRow className="border-b border-gray-800 hover:bg-transparent">
                <TableHead className="text-neutral-400 font-medium py-3 px-6">Invoice</TableHead>
                <TableHead className="text-neutral-400 font-medium py-3 px-6">Date</TableHead>
                <TableHead className="text-neutral-400 font-medium py-3 px-6">Due Date</TableHead>
                <TableHead className="text-neutral-400 font-medium py-3 px-6">Amount</TableHead>
                <TableHead className="text-neutral-400 font-medium py-3 px-6">Status</TableHead>
                <TableHead className="text-right text-neutral-400 font-medium py-3 px-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice) => (
                <TableRow key={invoice.id} className="border-t border-gray-800 hover:bg-gray-900/30">
                  <TableCell className="py-4 px-6">{invoice.id}</TableCell>
                  <TableCell className="py-4 px-6">{invoice.date}</TableCell>
                  <TableCell className="py-4 px-6">{invoice.dueDate}</TableCell>
                  <TableCell className="py-4 px-6">{invoice.amount}</TableCell>
                  <TableCell className="py-4 px-6">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${statusColors[invoice.status]}`}>
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 px-6 text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-neutral-400 hover:text-[var(--white)] hover:bg-gray-800"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="py-16 text-center">
          <FileText className="h-12 w-12 mx-auto mb-4 text-neutral-600" />
          <h3 className="text-xl font-medium mb-2">No Invoices Found</h3>
          <p className="text-neutral-400 max-w-md mx-auto">
            Once you start using our services, your invoices will appear here.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default InvoicesList;
