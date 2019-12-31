import { InjectionToken } from '@angular/core';
import * as _moment from 'moment';
const moment = _moment;
export const LOCALE_CONFIG = new InjectionToken('daterangepicker.config');
/**
 *  DefaultLocaleConfig
 */
export const DefaultLocaleConfig = {
    direction: 'ltr',
    separator: ' - ',
    weekLabel: 'W',
    applyLabel: 'Done',
    cancelLabel: 'Reset',
    clearLabel: 'Clear',
    startDateLabel: 'Start Date',
    endDateLabel: 'End Date',
    customRangeLabel: 'Custom range',
    daysOfWeek: moment.weekdaysMin(),
    monthNames: moment.months(),
    firstDay: moment.localeData().firstDayOfWeek()
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXRlcmFuZ2VwaWNrZXItbWF0ZXJpYWwvIiwic291cmNlcyI6WyJkYXRlcmFuZ2VwaWNrZXIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFFbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBZSx3QkFBd0IsQ0FBQyxDQUFDO0FBbUJ4Rjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFpQjtJQUNoRCxTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsR0FBRztJQUNkLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLGNBQWMsRUFBRSxZQUFZO0lBQzVCLFlBQVksRUFBRSxVQUFVO0lBQ3hCLGdCQUFnQixFQUFFLGNBQWM7SUFDaEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7SUFDaEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxjQUFjLEVBQUU7Q0FDOUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IG1vbWVudCA9IF9tb21lbnQ7XG5cbmV4cG9ydCBjb25zdCBMT0NBTEVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPExvY2FsZUNvbmZpZz4oJ2RhdGVyYW5nZXBpY2tlci5jb25maWcnKTtcbi8qKlxuICogIExvY2FsZUNvbmZpZyBJbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2NhbGVDb25maWcge1xuXHRkaXJlY3Rpb24/OiBzdHJpbmc7XG5cdHNlcGFyYXRvcj86IHN0cmluZztcblx0d2Vla0xhYmVsPzogc3RyaW5nO1xuXHRhcHBseUxhYmVsPzogc3RyaW5nO1xuXHRjYW5jZWxMYWJlbD86IHN0cmluZztcblx0Y2xlYXJMYWJlbD86IHN0cmluZztcblx0Y3VzdG9tUmFuZ2VMYWJlbD86IHN0cmluZztcblx0c3RhcnREYXRlTGFiZWw/OiBzdHJpbmc7XG5cdGVuZERhdGVMYWJlbD86IHN0cmluZztcblx0ZGF5c09mV2Vlaz86IHN0cmluZ1tdO1xuXHRtb250aE5hbWVzPzogc3RyaW5nW107XG5cdGZpcnN0RGF5PzogbnVtYmVyO1xuXHRmb3JtYXQ/OiBzdHJpbmc7XG59XG4vKipcbiAqICBEZWZhdWx0TG9jYWxlQ29uZmlnXG4gKi9cbmV4cG9ydCBjb25zdCBEZWZhdWx0TG9jYWxlQ29uZmlnOiBMb2NhbGVDb25maWcgPSB7XG5cdGRpcmVjdGlvbjogJ2x0cicsXG5cdHNlcGFyYXRvcjogJyAtICcsXG5cdHdlZWtMYWJlbDogJ1cnLFxuXHRhcHBseUxhYmVsOiAnRG9uZScsXG5cdGNhbmNlbExhYmVsOiAnUmVzZXQnLFxuXHRjbGVhckxhYmVsOiAnQ2xlYXInLFxuXHRzdGFydERhdGVMYWJlbDogJ1N0YXJ0IERhdGUnLFxuXHRlbmREYXRlTGFiZWw6ICdFbmQgRGF0ZScsXG5cdGN1c3RvbVJhbmdlTGFiZWw6ICdDdXN0b20gcmFuZ2UnLFxuXHRkYXlzT2ZXZWVrOiBtb21lbnQud2Vla2RheXNNaW4oKSxcblx0bW9udGhOYW1lczogbW9tZW50Lm1vbnRocygpLFxuXHRmaXJzdERheTogbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpXG59O1xuIl19