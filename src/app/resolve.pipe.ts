import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resolve'
})
export class ResolvePipe implements PipeTransform {

  transform(items: any[],value: any, label: any): any {
    
    return items.filter((item:any)=>{
      if (!items) return [];
      // returns null objects
      // if(item[label] == null) return item;
      //returns string objects
      if(value == "" || value ==null){
        return items;
      }
      if(value == "resolved"){
        if(typeof item[label] === 'string' ) return item;
      }
      if(value == "unresolved"){
        if(item[label] == null) return item;
      }
      // else{
      //   return items;
      // }
        
      
      // console.log(items == null);
      if (!value) return  items;
      if (value == "" || value == null) return [];
      // else
      // return filter
      //  ? items.filter(e =>e[label].toString().toLowerCase().indexOf(value)> -1 )
      // : items;
 
    });
  }

}
