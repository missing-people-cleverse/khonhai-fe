export interface IComment {
  foundDatetime: string;
  foundDetail: string;
  img: string[];
  isArchive: boolean;
  foundPlace: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  user: {
    id: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    address: string;
    province: string;
    postcode: string;
  };
}
