export interface BostPrice {
    ton: number;
    xtr: string;
}
  
export interface BostItem {
    bostId: number;
    count: number;
    userId: string;
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
    userBosts: BostItem[];
}