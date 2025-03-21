
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

interface ReferralRecord {
  id: number;
  name: string;
  email: string;
  status: string;
  date: string;
  credits: number;
}

interface ReferralHistoryProps {
  referralHistory: ReferralRecord[];
}

const ReferralHistory = ({ referralHistory }: ReferralHistoryProps) => {
  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-medium mb-4">Referral History</h2>
      
      <div className="rounded-lg border border-gray-800 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Credits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referralHistory.map((referral) => (
              <TableRow key={referral.id} className="border-gray-800">
                <TableCell className="font-medium">{referral.name}</TableCell>
                <TableCell>{referral.email}</TableCell>
                <TableCell>{referral.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    referral.status === 'Completed' 
                      ? 'bg-green-900/30 text-green-300' 
                      : 'bg-yellow-900/30 text-yellow-300'
                  }`}>
                    {referral.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {referral.credits > 0 ? `$${referral.credits}` : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReferralHistory;
