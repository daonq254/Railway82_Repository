import { Person } from "./Person";

class Student extends Person {
  // Thuộc tính mở rộng
  private classVti_old: string;
  private testScore_JavaAdvanced: number;

  //   xây dựng hàm contructor
  constructor(id: number, name: string, address: string, classVti_old: string, testScore_JavaAdvanced: number) {
    super(id, name, address);
    this.classVti_old = classVti_old;
    this.testScore_JavaAdvanced = testScore_JavaAdvanced;
  }

  public getClassVti_old(): string {
    return this.classVti_old;
  }

  public getTestScore_JavaAdvanced(): number {
    return this.testScore_JavaAdvanced;
  }

  public setClassVti_old(value: string) {
    this.classVti_old = value;
  }

  public setTestScore_JavaAdvanced(value: number) {
    this.testScore_JavaAdvanced = value;
  }
}
