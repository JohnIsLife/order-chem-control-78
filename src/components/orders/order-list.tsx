
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Package } from "lucide-react";

interface Order {
  id: string;
  chemicalName: string;
  quantity: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  orderDate: string;
  estimatedDelivery: string;
}

const orders: Order[] = [
  {
    id: "ORD-001",
    chemicalName: "Sodium Hydroxide",
    quantity: "1kg",
    status: "processing",
    orderDate: "2024-01-15",
    estimatedDelivery: "2024-01-22"
  },
  {
    id: "ORD-002",
    chemicalName: "Potassium Permanganate",
    quantity: "500g",
    status: "shipped",
    orderDate: "2024-01-12",
    estimatedDelivery: "2024-01-20"
  },
  {
    id: "ORD-003",
    chemicalName: "Benzene",
    quantity: "2L",
    status: "delivered",
    orderDate: "2024-01-10",
    estimatedDelivery: "2024-01-18"
  }
];

interface OrderListProps {
  onOrderSelect: (orderId: string | null) => void;
  selectedOrderId: string | null;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending": return "bg-yellow-500";
    case "processing": return "bg-blue-500";
    case "shipped": return "bg-purple-500";
    case "delivered": return "bg-green-500";
    case "cancelled": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

const OrderList = ({ onOrderSelect, selectedOrderId }: OrderListProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Order List
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-5rem)] overflow-auto">
        <div className="space-y-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                selectedOrderId === order.id ? "border-primary bg-primary/5" : ""
              }`}
              onClick={() => onOrderSelect(order.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium">{order.id}</div>
                  <div className="text-sm text-muted-foreground">{order.chemicalName}</div>
                </div>
                <Badge className={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">Quantity</div>
                  <div className="text-muted-foreground">{order.quantity}</div>
                </div>
                <div>
                  <div className="font-medium">Order Date</div>
                  <div className="text-muted-foreground">{order.orderDate}</div>
                </div>
              </div>
              
              <div className="mt-3 flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  View Form
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderList;
