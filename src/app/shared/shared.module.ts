import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { Cmp1Component } from './Components/cmp1/cmp1.component';
import { Cmp2Component } from './Components/cmp2/cmp2.component';
import { MatDividerModule } from '@angular/material/divider';
import { PostsComponent } from './Components/posts/posts.component';

@NgModule({
  declarations: [HomeComponent, Cmp1Component, Cmp2Component, PostsComponent],
  imports: [CommonModule, MatDividerModule],
  exports: [HomeComponent],
})
export class SharedModule {}
