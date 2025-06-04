
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Eye } from "lucide-react";

const ProcedureFlowchart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Standard Operating Procedure
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Follow the standard operating procedure for safe chemical handling and laboratory protocols.
        </p>
        
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className="w-full flex items-center gap-2">
              <Eye className="h-4 w-4" />
              View SOP Flowchart
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh]">
            <DialogHeader>
              <DialogTitle>Standard Operating Procedure Flowchart</DialogTitle>
            </DialogHeader>
            <div className="flex items-center justify-center h-[70vh] bg-muted rounded-lg">
              <div className="text-center space-y-4">
                <FileText className="h-16 w-16 mx-auto text-muted-foreground" />
                <p className="text-lg font-medium">SOP Flowchart PDF</p>
                <p className="text-muted-foreground">
                  This would display the actual PDF flowchart in a production environment
                </p>
                <Button variant="outline">
                  Download PDF
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProcedureFlowchart;
