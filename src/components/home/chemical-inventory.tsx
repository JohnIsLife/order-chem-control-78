
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Flask } from "lucide-react";

const chemicals = [
  {
    id: 1,
    name: "Sodium Chloride",
    formula: "NaCl",
    quantity: "500g",
    location: "Cabinet A-1",
    storageUrl: "https://example.com/storage/cabinet-a1"
  },
  {
    id: 2,
    name: "Hydrochloric Acid",
    formula: "HCl",
    quantity: "1L",
    location: "Fume Hood B-2",
    storageUrl: "https://example.com/storage/fume-hood-b2"
  },
  {
    id: 3,
    name: "Ethanol",
    formula: "C₂H₅OH",
    quantity: "2L",
    location: "Flammable Cabinet C-1",
    storageUrl: "https://example.com/storage/flammable-c1"
  },
  {
    id: 4,
    name: "Acetone",
    formula: "C₃H₆O",
    quantity: "500ml",
    location: "Solvent Cabinet D-3",
    storageUrl: "https://example.com/storage/solvent-d3"
  },
  {
    id: 5,
    name: "Sulfuric Acid",
    formula: "H₂SO₄",
    quantity: "250ml",
    location: "Acid Cabinet E-1",
    storageUrl: "https://example.com/storage/acid-e1"
  }
];

const ChemicalInventory = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flask className="h-5 w-5" />
          Chemical Inventory
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-5rem)] overflow-auto">
        <div className="space-y-2">
          {chemicals.map((chemical) => (
            <div
              key={chemical.id}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="md:col-span-2">
                <div className="font-medium">{chemical.name}</div>
                <div className="text-sm text-muted-foreground">{chemical.formula}</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">{chemical.quantity}</div>
                <div className="text-muted-foreground">Available</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">{chemical.location}</div>
                <div className="text-muted-foreground">Storage</div>
              </div>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(chemical.storageUrl, '_blank')}
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  View Location
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChemicalInventory;
