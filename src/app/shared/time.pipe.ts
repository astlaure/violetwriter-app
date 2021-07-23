import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const hours = Math.floor(value / (60 * 60));
    const minutes = Math.floor((value - hours) / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });
    const seconds = (value % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });
    return `${hours.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${minutes}:${seconds}`;
  }

}
