export type Variant = {
    variant?: string;
    name: string;
    quantity: number;
    unitCost: string;
    total: string;
  };
 
  
export type SupplierCardProps = {
    name: string;
    rating: number;
    variants?: Variant[];
    badges?: string[];
    colorScheme?: CardsColorScheme;
  };

export type CardsColorScheme = {
    backgroundColor: string;
    borderColor: string;
}
  