
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Clock, CheckCircle, XCircle } from "lucide-react";

interface AdminOrder {
  id: string;
  chemicalName: string;
  requester: string;
  submissionDate: string;
  currentStep: number;
  totalSteps: number;
  status: "pending" | "in-review" | "approved" | "rejected";
}

const adminOrders: AdminOrder[] = [
  {
    id: "ORD-001",
    chemicalName: "Sodium Hydroxide",
    requester: "Dr. Smith",
    submissionDate: "2024-01-15",
    currentStep: 2,
    totalSteps: 4,
    status: "in-review"
  },
  {
    id: "ORD-002",
    chemicalName: "Potassium Permanganate",
    requester: "Dr. Johnson",
    submissionDate: "2024-01-12",
    currentStep: 4,
    totalSteps: 4,
    status: "approved"
  },
  {
    id: "ORD-003",
    chemicalName: "Benzene",
    requester: "Dr. Brown",
    submissionDate: "2024-01-10",
    currentStep: 1,
    totalSteps: 4,
    status: "pending"
  }
];

interface AdminOrderListProps {
  onOrderSelect: (orderId: string | null) => void;
  selectedOrderId: string | null;
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "pending": return <Clock className="h-4 w-4" />;
    case "in-review": return <Settings className="h-4 w-4" />;
    case "approved": return <CheckCircle className="h-4 w-4" />;
    case "rejected": return <XCircle className="h-4 w-4" />;
    default: return null;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending": return "bg-yellow-500";
    case "in-review": return "bg-blue-500";
    case "approved": return "bg-green-500";
    case "rejected": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

const AdminOrderList = ({ onOrderSelect, selectedOrderId }: AdminOrderListProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Admin - Order Management
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-5rem)] overflow-auto">
        <div className="space-y-3">
          {adminOrders.map((order) => (
            <div
              key={order.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                selectedOrderId === order.id ? "border-primary bg-primary/5" : ""
              }`}
              onClick={() => onOrderSelect(order.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-medium">{order.id}</div>
                  <div className="text-sm text-muted-foreground">{order.chemicalName}</div>
                </div>
                <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
                  {getStatusIcon(order.status)}
                  {order.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div>
                  <div className="font-medium">Requester</div>
                  <div className="text-muted-foreground">{order.requester}</div>
                </div>
                <div>
                  <div className="font-medium">Submitted</div>
                  <div className="text-muted-foreground">{order.submissionDate}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-medium">Progress: </span>
                  <span className="text-muted-foreground">
                    Step {order.currentStep} of {order.totalSteps}
                  </span>
                </div>
                <div className="w-20 bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(order.currentStep / order.totalSteps) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminOrderList;
