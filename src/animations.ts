import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  stagger
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        stagger('0ms', animate('.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        )], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        stagger('0ms', animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        )], { optional: true }),
    ])
  ])
]);
// add transform: background-image to the animation
