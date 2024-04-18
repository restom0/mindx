export class ResponseDTO {
  constructor(data, error) {
    this.data = data;
    this.userName = error;
  }
}
