
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, FileText, User, Calendar, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdminOrderDetailsProps {
  orderId: string | null;
}

const orderDetails = {
  "ORD-001": {
    chemicalName: "Sodium Hydroxide",
    formula: "NaOH",
    quantity: "1kg",
    purity: "99.5%",
    requester: "Dr. Smith",
    department: "Chemistry Department",
    purpose: "Research - pH adjustment experiments",
    submissionDate: "2024-01-15",
    attachedForm: "chemical-request-form.pdf",
    steps: [
      { id: 1, title: "Initial Review", status: "completed", reviewer: "Admin", date: "2024-01-15" },
      { id: 2, title: "Safety Assessment", status: "in-progress", reviewer: "Safety Officer", date: null },
      { id: 3, title: "Budget Approval", status: "pending", reviewer: "Finance", date: null },
      { id: 4, title: "Final Authorization", status: "pending", reviewer: "Department Head", date: null }
    ]
  }
};

const AdminOrderDetails = ({ orderId }: AdminOrderDetailsProps) => {
  const { toast } = useToast();

  const handleApproveStep = () => {
    toast({
      title: "Step Approved",
      description: "The current step has been approved successfully.",
    });
  };

  const handleRejectStep = () => {
    toast({
      title: "Step Rejected",
      description: "The current step has been rejected.",
      variant: "destructive",
    });
  };

  if (!orderId || !orderDetails[orderId as keyof typeof orderDetails]) {
    return (
      <Card className="h-full">
        <CardContent className="h-full flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p>Select an order to view details and manage approval steps</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const order = orderDetails[orderId as keyof typeof orderDetails];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Order Details - {orderId}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 h-[calc(100%-5rem)] overflow-auto">
        {/* Order Information */}
        <div className="space-y-4">
          <h3 className="font-medium flex items-center gap-2">
            <Package className="h-4 w-4" />
            Chemical Information
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium">Chemical Name</div>
              <div className="text-muted-foreground">{order.chemicalName}</div>
            </div>
            <div>
              <div className="font-medium">Formula</div>
              <div className="text-muted-foreground">{order.formula}</div>
            </div>
            <div>
              <div className="font-medium">Quantity</div>
              <div className="text-muted-foreground">{order.quantity}</div>
            </div>
            <div>
              <div className="font-medium">Purity</div>
              <div className="text-muted-foreground">{order.purity}</div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Requester Information */}
        <div className="space-y-4">
          <h3 className="font-medium flex items-center gap-2">
            <User className="h-4 w-4" />
            Requester Information
          </h3>
          <div className="grid grid-cols-1 gap-4 text-sm">
            <div>
              <div className="font-medium">Name</div>
              <div className="text-muted-foreground">{order.requester}</div>
            </div>
            <div>
              <div className="font-medium">Department</div>
              <div className="text-muted-foreground">{order.department}</div>
            </div>
            <div>
              <div className="font-medium">Purpose</div>
              <div className="text-muted-foreground">{order.purpose}</div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Attached Form */}
        <div className="space-y-3">
          <h3 className="font-medium">Attached Documents</h3>
          <Button variant="outline" className="w-full justify-start">
            <FileText className="h-4 w-4 mr-2" />
            {order.attachedForm}
          </Button>
        </div>

        <Separator />

        {/* Approval Steps */}
        <div className="space-y-4">
          <h3 className="font-medium">Approval Steps</h3>
          <div className="space-y-3">
            {order.steps.map((step) => (
              <div key={step.id} className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="flex flex-col items-center">
                  {step.status === "completed" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : step.status === "in-progress" ? (
                    <div className="h-5 w-5 rounded-full border-2 border-blue-500 bg-blue-500/20" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{step.title}</div>
                    <Badge variant={
                      step.status === "completed" ? "default" :
                      step.status === "in-progress" ? "secondary" : "outline"
                    }>
                      {step.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Reviewer: {step.reviewer}
                  </div>
                  {step.date && (
                    <div className="text-xs text-muted-foreground">
                      {step.date}
                    </div>
                  )}
                  
                  {step.status === "in-progress" && (
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" onClick={handleApproveStep}>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" onClick={handleRejectStep}>
                        <XCircle className="h-3 w-3 mr-1" />
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminOrderDetails;
