import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(url: string): string {
    if ( url == null || url.replace(' ', '') == null)
    {url = 'assets/images/default_image.png';
    }
    return url;
  }

}
