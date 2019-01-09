export interface IEmployee {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  role: string;
  address?: IAddress;
  projectsWorkingIn: IProjects[];

}

export interface IAddress {
  houseNo: string;
  city: string;
  state: string;
  pin: number;
}

export interface IProjects {
  projectName: string;
  projectCode: string;
}
