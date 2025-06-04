
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ShoppingCart, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const termsAndConditions = [
  "All chemical purchases must be approved by authorized personnel",
  "Safety data sheets (SDS) must be reviewed before ordering",
  "Proper storage requirements must be verified",
  "Delivery and handling protocols must be followed",
  "Documentation must be maintained for all chemical orders"
];

const PurchaseForm = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Purchase form PDF is being downloaded...",
    });
    
    // In a real application, this would trigger an actual PDF download
    console.log("Downloading purchase form PDF...");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Purchase Form
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleDownload} className="w-full flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Purchase Form
        </Button>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <AlertCircle className="h-4 w-4 text-amber-500" />
            Terms & Conditions
          </div>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {termsAndConditions.map((term, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseForm;
