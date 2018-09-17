export interface Order {

  id: number;
  status: string;
  dishesIDs: number[];
  addressData: {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    street: string;
    city: string;
    houseNumber: number;
    floor: number;

  };

}
