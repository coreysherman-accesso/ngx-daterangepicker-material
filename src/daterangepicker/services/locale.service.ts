import { Injectable, Inject } from '@angular/core';
import { LOCALE_CONFIG, DefaultLocaleConfig, LocaleConfig } from '../date-range-picker.config';

@Injectable()
export class LocaleService {
	constructor(@Inject(LOCALE_CONFIG) private _config: LocaleConfig) {}

	get config() {
		return { ...DefaultLocaleConfig, ...this._config };
	}
}
