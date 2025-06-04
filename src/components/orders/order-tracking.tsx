
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Star, X, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OrderTrackingProps {
  orderId: string | null;
}

const trackingSteps = [
  { id: 1, title: "Order Placed", description: "Order has been submitted", completed: true },
  { id: 2, title: "Processing", description: "Order is being processed", completed: true },
  { id: 3, title: "Shipped", description: "Order has been shipped", completed: true },
  { id: 4, title: "Out for Delivery", description: "Order is out for delivery", completed: false },
  { id: 5, title: "Delivered", description: "Order has been delivered", completed: false }
];

const OrderTracking = ({ orderId }: OrderTrackingProps) => {
  const { toast } = useToast();

  const handleConfirmReceipt = () => {
    toast({
      title: "Order Confirmed",
      description: "Thank you for confirming receipt of your order.",
    });
  };

  const handleRateOrder = () => {
    toast({
      title: "Rating Submitted",
      description: "Thank you for rating this order!",
    });
  };

  const handleCancelOrder = () => {
    toast({
      title: "Order Cancelled",
      description: "Your order has been cancelled successfully.",
      variant: "destructive",
    });
  };

  if (!orderId) {
    return (
      <Card className="h-full">
        <CardContent className="h-full flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Package className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p>Select an order to view tracking details</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Order Tracking - {orderId}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Tracking Stepper */}
        <div className="space-y-4">
          <h3 className="font-medium">Delivery Progress</h3>
          <div className="space-y-3">
            {trackingSteps.map((step, index) => (
              <div key={step.id} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  {step.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                  {index < trackingSteps.length - 1 && (
                    <div className={`w-px h-8 mt-1 ${step.completed ? 'bg-green-500' : 'bg-muted'}`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Actions */}
        <div className="space-y-3 pt-4 border-t">
          <h3 className="font-medium">Order Actions</h3>
          
          <div className="grid grid-cols-1 gap-2">
            <Button onClick={handleConfirmReceipt} className="w-full">
              <CheckCircle className="h-4 w-4 mr-2" />
              Confirm Receipt
            </Button>
            
            <Button onClick={handleRateOrder} variant="outline" className="w-full">
              <Star className="h-4 w-4 mr-2" />
              Rate Order
            </Button>
            
            <Button onClick={handleCancelOrder} variant="destructive" className="w-full">
              <X className="h-4 w-4 mr-2" />
              Cancel Order
            </Button>
          </div>
        </div>

        {/* Order Status */}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <span className="font-medium">Current Status:</span>
            <Badge className="bg-purple-500">Shipped</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderTracking;
