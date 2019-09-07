import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Company } from '../model/Company';
import * as SecureLS from 'secure-ls';
import { Menu } from '../model/Menu';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlServer = environment.urlServer;
  private ls = new SecureLS({ encodingType: 'des', isCompression: false, encryptionSecret: 'cm' });

  constructor(private http: HttpClient) { }

  public login$(user: User): Observable<Array<Company>> {
    return this.http.post(`${this.urlServer}security/companies`, user).pipe(

      map((data: any) => {
        const response: Array<Company> = [];
        data.companies.forEach(company => {
          response.push(
            new Company(company.codigo, company.nombre, company.nombreCompleto, company.orden))
        });
        return response;
      })
    )
  }

  public getCountrySession(company: Company) {

    return this.http.post(`${this.urlServer}security/company/${company.code}`, {}).pipe(

      map((data: any) => {

        const response: Array<Menu> = [];
        data.forEach((menu: any) => {
          const newMenu = new Menu();
          newMenu.active = menu.ACTIVA;
          newMenu.environments = menu.ENTORNO;
          newMenu.childrenCount = menu.HIJOS;
          newMenu.iconSmall = menu.ICONO;
          newMenu.iconMedium = menu.ICONO16;
          newMenu.iconLarge = menu.ICONO32;
          newMenu.maxLevel = menu.MAXNIVEL;
          newMenu.level = menu.NIVEL;
          newMenu.name = menu.NOMBRE;
          newMenu.object = menu.OBJETO;
          newMenu.idOption = menu.OPCION;
          newMenu.order = menu.ORDEN;
          newMenu.parent = menu.PADRE;
          newMenu.type = menu.TIPO;
          response.push(newMenu);
        })
        return this.createMenuTree(response);
      })
    )
  }

  public setKey(key: string, data: any) {
    this.ls.set(key, data)
  }

  public getCompanies(): Array<Company> {
    return this.ls.get('co')
  }

  public getLoggedUset(): User {
    return this.ls.get('us')
  }

  public getMenu(): Array<Menu>{
    return this.ls.get('me');
  }

  private createMenuTree(menus: Array<Menu>) {
    let menuTree: Array<Menu> = [];

    menus.forEach(menu => {
      if (menu.parent === 0) {        
        menu.children = [];
        menuTree.push(menu)
      }
    })

    menuTree.forEach(parent => {
      menus.forEach(menu => {
        if (parent.idOption === menu.parent) {
          menu.children = [];
          parent.children.push(menu);
        }
      })
    })

    menuTree.forEach(parent => {
      parent.children.forEach(subMenu => {

        menus.forEach(menu => {
          if (subMenu.idOption === menu.parent) {
            subMenu.object = menu.object.split('/')[0];            
            menu.children = [];
            subMenu.children.push(menu);
          }
        })

      })
    })    
    this.setKey( 'me', menuTree);
    return menuTree;
  }
}
