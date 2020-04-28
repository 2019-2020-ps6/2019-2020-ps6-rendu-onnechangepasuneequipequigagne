import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SuperUser} from '../models/superuser.model';

@Injectable({
  providedIn: 'root'
})
export class SuperuserService {

  private superusers: SuperUser[] = [];
  private url = 'http://localhost:9428/api/superusers';

  public superusers$: BehaviorSubject<SuperUser[]> = new BehaviorSubject(this.superusers);


  constructor(private http: HttpClient) {
    this.setSuperUsersFromUrl();
  }

  setSuperUsersFromUrl() {
    this.http.get<SuperUser[]>(this.url).subscribe((superusers) => {
      console.log(superusers);
      this.superusers = superusers;
      this.superusers$.next(this.superusers);
    });
  }

  addSuperUser(superUser: SuperUser) {
    this.http.post<SuperUser>(this.url, superUser).subscribe((superUser) => {
      this.superusers.push(superUser);
      this.superusers$.next(this.superusers);
    })
  }

  getSuperUser(id: string): Observable<SuperUser>{
    const superUserUrl = `${this.url}/${id}`;
    return this.http.get<SuperUser>(superUserUrl);
  }

}

