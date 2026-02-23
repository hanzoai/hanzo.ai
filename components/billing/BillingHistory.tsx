
import React from 'react';
import { Download, ArrowLeft, Filter } from 'lucide-react';
import { Button } from "@hanzo/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@hanzo/ui";
import BillingTabsLink from './BillingTabsLink';

const BillingHistory = () => {
  const invoices = [
    { id: 'INV-001', date: 'Jun 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
    { id: 'INV-002', date: 'May 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
    { id: 'INV-003', date: 'Apr 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
    { id: 'INV-004', date: 'Mar 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
    { id: 'INV-005', date: 'Feb 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-white/10 text-white/70';
      case 'Pending':
        return 'bg-white/10 text-white/60';
      case 'Failed':
        return 'bg-white/10 text-white/70';
      default:
        return 'bg-gray-900/20 text-neutral-400';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <BillingTabsLink tabId="overview" variant="ghost">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Overview
        </BillingTabsLink>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>
      
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-medium mb-6">Invoice History</h3>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map(invoice => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;
