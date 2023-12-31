import {DOCUMENT} from '@angular/common';
import {ElementRef, Inject, Injectable, Self} from '@angular/core';
import {TuiDestroyService, tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {map, Observable, startWith, switchMap, takeUntil} from 'rxjs';

import {tuiGetElementPoint} from '../utils/get-element-point';

@Injectable()
export class TuiPickerService extends Observable<TuiPoint> {
    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) doc: Document,
    ) {
        const point$ = tuiTypedFromEvent(nativeElement, 'mousedown').pipe(
            tuiPreventDefault(),
            switchMap(event => {
                const mouseMove$ = tuiTypedFromEvent(doc, 'mousemove').pipe(
                    map(({clientX, clientY}) =>
                        tuiGetElementPoint(clientX, clientY, nativeElement),
                    ),
                    takeUntil(tuiTypedFromEvent(doc, 'mouseup')),
                );

                return event.target === nativeElement
                    ? mouseMove$.pipe(
                          startWith(
                              tuiGetElementPoint(
                                  event.clientX,
                                  event.clientY,
                                  nativeElement,
                              ),
                          ),
                      )
                    : mouseMove$;
            }),
            takeUntil(destroy$),
        );

        super(subscriber => point$.subscribe(subscriber));
    }
}
