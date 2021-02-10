import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { EntityData } from '@override/utils/interfaces/entityData';
import { EntitiesService } from '@override/utils/entities.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { SelectService } from '../select.service';
import { ColDef, GridApi } from 'ag-grid-community';
import { OverrideService } from '@override/utils/override.service';
import { EntityService } from '../../../../../../utils/entity.service';
import { FormGroup } from '@angular/forms';
import { API_URLS } from '../../../../../../../assets/constants/API_URLS';
import { AbstractField } from '../../../../../../utils/interfaces/field';
import { UtilsService } from '../../../../../../utils/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'Sentity',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnDestroy {

  @Input() x;
  entityData: EntityData;
  subscription: Subscription;
  constructor(
    public entities: EntitiesService,
    public translate: TranslateService,
    public utils: UtilsService,
    public override: OverrideService,
    private _bottomSheetRef: MatBottomSheetRef<SelectComponent>,
    private dataService: EntityService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.entityData = this.data.entityData;
    this.entityData = this.data.entityData;
    this.form = this.data.form;
    this.field = this.data.field
  }
  searchValue;
  filter() {
    this.gridApi.setQuickFilter(this.searchValue);
  }
  get class() {
    var theme = localStorage.getItem('currentTheme');
    switch (theme) {
      case 'dark':
        return 'ag-theme-material';
      case 'cosmic':
        return 'ag-theme-material';
      default:
        return 'ag-theme-material';
    }
  }


  fieldVal = null;
  form: FormGroup;
  field: AbstractField;
  columnDefs: ColDef[];
  rowData: any;
  rowSelection;
  gridApi: GridApi;
  selectedRows: any[];
  selectedRow: any;


  onGridReady(params) {

    this.field.multiple ? (this.rowSelection = 'multiple') : (this.rowSelection = 'single');
    this.getAllRowsForEntity();
    this.gridApi = params.api;

  }
  getAllRowsForEntity() {
    // uri for get
    let getUrl = API_URLS[this.field.selectOptions.fromSelector]['get']
    // path params
    if (this.field.selectOptions.pathParams) {
      let params = this.field.selectOptions.pathParams as [];
      for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (i == 0)
          getUrl += '?' + element['key'] + '=' + element['value'];
        else
          getUrl += '&' + element['key'] + '=' + element['value'];
      }
    }
    this.subscription = this.dataService.getAll(getUrl).subscribe(res => {
      if (this.field.selectOptions.subObjectName) {
        let dataToMap = res['body'] as [];
        res['body'] = [];
        dataToMap.forEach(element => {
          res['body'].push(element[this.field.selectOptions.subObjectName]);
        });
      }
      var i = 0;
      var cloumns = [];
      let exclude = this.field.selectOptions.exludeView as [];
      let localized = this.field.selectOptions.localized as [];


      if (res['body'].length > 0 && !this.field.selectOptions.columns)
        Object.keys(res[0]).forEach((col) => {
          if (exclude != undefined && arrayContains(col, exclude)) {
          } else {
            var column = {
              headerName: this.translate.instant(col),
              field: col,
              checkboxSelection: i === 0 ? true : false,
              filter: true,
              sortable: false,
              editable: false,
              cellRenderer: (params) => {
                let val = params.value;
                if (localized != undefined && arrayContains(col, localized)) {
                  return this.translate.instant(val);
                } else {
                  return val;
                }
              },
            };
            cloumns.push(column);
            i++;
          }
        });
      if (this.field.selectOptions.columns)
        this.field.selectOptions.columns.forEach(column => {
          cloumns.push(column);
          i++;
        });
      this.gridApi.setColumnDefs(cloumns)

      this.gridApi.applyTransaction({ add: res['body'] });




      this.gridApi.sizeColumnsToFit()
    });




  }

  onSelectionChanged(event) {
    this.selectedRows = this.gridApi.getSelectedRows();
  }

  rowSelected(event) {
    this.selectedRow = event.data;
  }

  selectRow() {

    var selectedRow;
    // this.form.removeControl(this.field.name);
    if (!this.field.multiple) selectedRow = this.gridApi.getSelectedRows()[0];
    else selectedRow = this.gridApi.getSelectedRows();

    // this.fieldVal=this.form.value[this.field.name][this.field.optionName][this.override.currentLang]
    var formVal = (this.form.value[this.field.name] = selectedRow);
    var contName = this.form.controls[this.field.name];

    contName.setValue(formVal);
    if (!this.field.multiple) {
      if (!this.field.selectOptions.options) {
        if (this.field.selectOptions.localized && this.field.selectOptions.localized.includes(this.field.selectOptions.optionName)) {

          this.fieldVal = this.form.value[this.field.name][this.field.selectOptions.optionName][this.override.currentLang];
        } else {

          // console.log(this.form.value[this.field.name][this.field.selectOptions.optionName][this.override.currentLang])
          this.fieldVal = this.form.value[this.field.name][this.field.selectOptions.optionName];
        }
      }
      else {
        let options = this.field.selectOptions.options;
        let fieldVal = this.form.value[this.field.name];
        options.forEach(value => {
          fieldVal = fieldVal[value];
        });
        console.log('3', options, fieldVal)

        this.fieldVal = fieldVal;
      }
    }
    if (this.field.multiple) {
      let value = this.form.value[this.field.name];
      let optionValue = [];
      if (value)
        value.forEach((val) => {
          optionValue.push(
            val[this.field.selectOptions.optionName][this.translate.currentLang],
          );
        });
      this.fieldVal = optionValue.toString();

    }

    setTimeout(() => {
      this._bottomSheetRef.dismiss({
        fieldVal: this.fieldVal,
        form: this.form
      })
    }, 200);

  }

  ngOnDestroy(): void {
    console.log('selectComponent Destroy')
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
function arrayContains(needle, arrhaystack) {
  return (arrhaystack.indexOf(needle) > -1);
}

