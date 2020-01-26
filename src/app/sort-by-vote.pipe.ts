import { Pipe, PipeTransform } from "@angular/core";
import { sortBy } from "lodash";

@Pipe({
  name: "sortByVote"
})
export class SortByVotePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return sortBy(value, ["votes"]);
  }
}
