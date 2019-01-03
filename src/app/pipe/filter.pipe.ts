import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search : any): any {
    if (search === undefined ) return value;

    return value.filter((item: any) =>{
      for(let prop in item) {
        if(typeof item[prop] === "string" && item[prop].indexOf(search) > -1) {
          return true;
        }
      }
      return false;
    })
  }

}
