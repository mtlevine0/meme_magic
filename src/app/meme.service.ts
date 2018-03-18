import { Injectable } from '@angular/core';

import { Meme } from './meme.model';
import { MOCKMEME } from './mock-meme';

@Injectable()
export class MemeService {

    public getMemes(): Meme[] {
        return MOCKMEME.slice();
    }

}