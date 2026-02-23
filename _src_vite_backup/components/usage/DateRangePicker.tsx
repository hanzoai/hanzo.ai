
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface DateRangePickerProps {
  dateRange: {
    start: string;
    end: string;
  };
  onDateRangeChange: (dateRange: { start: string; end: string }) => void;
}

const DateRangePicker = ({ dateRange, onDateRangeChange }: DateRangePickerProps) => {
  const handlePrevious = () => {
    // This would normally calculate the previous date range
    // For now, we'll just update the display
    onDateRangeChange({
      start: "Mar 1",
      end: "Mar 6"
    });
  };

  const handleNext = () => {
    // This would normally calculate the next date range
    // For now, we'll just update the display
    onDateRangeChange({
      start: "Mar 9",
      end: "Mar 15"
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant="outline" 
        size="sm" 
        className="border-gray-700 hover:bg-gray-800"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button 
        variant="outline"
        className="border-gray-700 hover:bg-gray-800"
      >
        <Calendar className="h-4 w-4 mr-2" />
        <span>{dateRange.start} - {dateRange.end}</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="border-gray-700 hover:bg-gray-800"
        onClick={handleNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default DateRangePicker;
