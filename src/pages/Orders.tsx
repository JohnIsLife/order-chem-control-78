
import MainLayout from "@/components/layout/main-layout";
import OrderList from "@/components/orders/order-list";
import OrderTracking from "@/components/orders/order-tracking";
import { useState } from "react";

const Orders = () => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className="h-[calc(100vh-4rem)] p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OrderList onOrderSelect={setSelectedOrderId} selectedOrderId={selectedOrderId} />
        <OrderTracking orderId={selectedOrderId} />
      </div>
    </MainLayout>
  );
};

export default Orders;
