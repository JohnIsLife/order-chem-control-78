
import MainLayout from "@/components/layout/main-layout";
import ChemicalInventory from "@/components/home/chemical-inventory";
import ProcedureFlowchart from "@/components/home/procedure-flowchart";
import PurchaseForm from "@/components/home/purchase-form";

const Index = () => {
  return (
    <MainLayout>
      <div className="h-[calc(100vh-4rem)] p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chemical Inventory - Takes up 2 columns on large screens */}
        <div className="lg:col-span-2">
          <ChemicalInventory />
        </div>
        
        {/* Right column with Procedure and Purchase */}
        <div className="space-y-6">
          <ProcedureFlowchart />
          <PurchaseForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
