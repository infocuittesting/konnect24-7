import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operator/filter';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(items: any[], value: string, label:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (typeof value == 'undefined')        return items;
    if (value =="")        return items;
    
    if (!!items[label])
            return items;
    if (value == "" || value == null) return [];
    return filter
     ? items.filter(e =>e[label].toString().toLowerCase().indexOf(value)> -1 )
    : items;
 
  }
   
  }


// @Pipe({
//   name: 'filterdata',
//   pure: false
// })
// export class FilterdataPipe implements PipeTransform {
//   transform(items: any[], query:any) {
//     console.log('--------filter started--------');
//     return items.filter(function(item, index){
//       if (typeof query == 'undefined')
//         return true;
//       if (query =="")
//         return true;
//       if (!!item.pf_firstname)
//         return item.includes(query);
//     });

//   }  
// }
