
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Filter, Calendar, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

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
    Paid: "bg-green-900/30 text-green-400",
    Due: "bg-yellow-900/30 text-yellow-400",
    Overdue: "bg-red-900/30 text-red-400",
    Processing: "bg-blue-900/30 text-blue-400"
  };

  return (
    <motion.div 
      variants={cardAnimation}
      className="rounded-xl border border-gray-800 bg-gray-900/20 overflow-hidden"
    >
      <div className="p-6 border-b border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-gray-400" />
          <div className="space-y-1">
            <h3 className="text-xl font-medium">Invoice History</h3>
            <p className="text-sm text-gray-400">View and download past invoices</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          
          <Button className="bg-white hover:bg-gray-200 text-black">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>
      
      {filteredInvoices.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900/50">
                <th className="text-left py-3 px-6 font-medium text-gray-400">Invoice</th>
                <th className="text-left py-3 px-6 font-medium text-gray-400">Date</th>
                <th className="text-left py-3 px-6 font-medium text-gray-400">Due Date</th>
                <th className="text-left py-3 px-6 font-medium text-gray-400">Amount</th>
                <th className="text-left py-3 px-6 font-medium text-gray-400">Status</th>
                <th className="text-right py-3 px-6 font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-t border-gray-800 hover:bg-gray-900/30">
                  <td className="py-4 px-6">{invoice.id}</td>
                  <td className="py-4 px-6">{invoice.date}</td>
                  <td className="py-4 px-6">{invoice.dueDate}</td>
                  <td className="py-4 px-6">{invoice.amount}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${statusColors[invoice.status]}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-16 text-center">
          <FileText className="h-12 w-12 mx-auto mb-4 text-gray-600" />
          <h3 className="text-xl font-medium mb-2">No Invoices Found</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Once you start using our services, your invoices will appear here.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default InvoicesList;
