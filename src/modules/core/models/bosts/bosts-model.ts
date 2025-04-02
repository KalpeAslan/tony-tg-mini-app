export interface BostPrice {
    ton: number;
    xtr: string;
}
  
export interface BostItem {
    id:              number;
    name:            string;
    description:     string;
    tonPrice:        string;
    fixedStarsPrice: string | number | null;
    imageUrl:        string | null;
    price:           BostPrice;
}


export interface BoostResponse {
    success: boolean;
    bosts: BostItem[];
}
  
export interface SingleBoostResponse {
    success: boolean;
    boost: BostItem;
}
  
export interface UserActiveBoost {
    bostId:   number;
    count:    number;
    userId:   string;
    imageUrl: string | null;
}

export interface UserActiveBoostsResponse {
    success: boolean;
    userBosts: UserActiveBoost[];
}