export type Variant = {
    variant?: string;
    name: string;
    quantity: number;
    unitCost: string;
    total: string;
  };
 
  
export type SupplierCardProps = {
    name: string;
    rating: string;
    variants: Variant[];
    badges?: string[];
    colorScheme: CardsColorScheme;
    scoreColorScheme: CardsColorScheme;
    closeCard: () => void;
  };

export type CardsColorScheme = {
    backgroundColor: string;
    borderColor: string;
    textColor?: string
    minScore: number;
}
  