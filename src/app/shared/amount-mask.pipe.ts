import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'amountMask' })
export class AmountMaskPipe implements PipeTransform {
  transform(value: number) {
    return value ? parseFloat(value.toFixed(2)) : null;
  }
}
