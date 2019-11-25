import { Injectable } from '@angular/core';
import { AppRepository } from './repositories/app.repository';
import { AppSession } from './sessions/app.sessions';

@Injectable()
export class AppContext {

    constructor(
        private appRepository: AppRepository,
        private appSession: AppSession
    ) {

    }

    get Repository(): AppRepository {
        return this.appRepository;
    }

    get Session(): AppSession {
        return this.appSession;
    }
}
