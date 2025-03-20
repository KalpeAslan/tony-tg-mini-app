export interface BostPrice {
    ton: number;
    xtr: string;
}
  
export interface BostItem {
    id: number;
    name: string;
    price: BostPrice;
    type: string;
    image: string;
}


export interface BoostResponse {
    success: boolean;
    bosts: BostItem[];
}
  
export interface SingleBoostResponse {
    success: boolean;
    boost: BostItem;
}
  
export interface UserActiveBoostsResponse {
    success: boolean;
    boosts: BostItem[];
}