import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { IEncryptionStrategy } from 'src/app/models/encryption-strategy.interface';
import { PermutationService } from 'src/app/services/encryption/permutation.service';
import { SubstitutionService } from 'src/app/services/encryption/substitution.service';

@Component({
  selector: 'app-change-strategy-button',
  templateUrl: './change-strategy-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeStrategyButtonComponent {
  @Output()
  public strategySelect = new EventEmitter<IEncryptionStrategy>();

  public menuItems: { label: string, strategy: IEncryptionStrategy }[] = [
    { label: 'Permutation', strategy: this.permutationService },
    { label: 'Substitution', strategy: this.substitutionService },
  ];

  constructor(
    private permutationService: PermutationService,
    private substitutionService: SubstitutionService,
  ) {}

  public onStrategyMenuItemSelect(strategy: IEncryptionStrategy) {
    this.strategySelect.emit(strategy);
  }
}
