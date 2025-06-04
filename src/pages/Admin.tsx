
import MainLayout from "@/components/layout/main-layout";
import AdminOrderList from "@/components/admin/admin-order-list";
import AdminOrderDetails from "@/components/admin/admin-order-details";
import { useState } from "react";

const Admin = () => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className="h-[calc(100vh-4rem)] p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdminOrderList onOrderSelect={setSelectedOrderId} selectedOrderId={selectedOrderId} />
        <AdminOrderDetails orderId={selectedOrderId} />
      </div>
    </MainLayout>
  );
};

export default Admin;
