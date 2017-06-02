/** <pre>
 * e-construcao.component
 * ======================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Apresenta visualmente a nota do município, através de uma imagem ilustrativa (prédio)
 * com a descrição do status atual e os pontos a melhorar
 *
 * Recebe as seguintes propriedades:
 *  municipio:         o município para o qual deve se apresentar o status da edificação do controle interno
 *
 * Exemplo de uso:
 *
 *  <e-status-edificacao municipio="Rio de Janeiro"></e-status-edificacao>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../core/index';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'e-construcao',
  templateUrl: 'e-construcao.component.html',
  styleUrls: ['e-construcao.component.css']
})
export class EConstrucaoComponent {

  @Input() municipio:   string = '§§ MUNICIPIO §§';

}
