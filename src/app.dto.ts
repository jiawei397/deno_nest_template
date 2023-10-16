import { Max, Min, MinLength } from "class_validator";

export class SaveDto {
  @Max(2)
  @Min(1)
  pageNum: number;

  @Max(5)
  @Min(1)
  pageCount: number;

  @MinLength(2)
  content: string;
}
