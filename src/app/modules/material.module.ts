// Material Design Modules
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [MatButtonModule, MatIconModule,
            MatCardModule, MatBadgeModule,
            MatInputModule, ScrollDispatchModule],

  exports: [MatButtonModule,  MatIconModule,
            MatCardModule, MatBadgeModule,
            MatInputModule, ScrollDispatchModule],
})
export class MaterialModule {}
