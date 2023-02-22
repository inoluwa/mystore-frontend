export interface CartProduct {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    orderCount:number;
  }
  export interface CustomerInformation{
    fullname?: string;
    address?: string;
    cardnumber?: string;
    
  }