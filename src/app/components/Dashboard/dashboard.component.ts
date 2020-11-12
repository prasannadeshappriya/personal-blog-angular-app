import {Component, OnInit} from "@angular/core";
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/App/auth.service';
import { StatService } from 'src/app/services/App/statistics.service';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthService, StatService]
})
export class DashboardComponent implements OnInit{
  constructor(private statService: StatService) {}
  chartData;
  serviceData;
  serviceDataDateMap;
  
  filterServiceData;
  filterServiceDataIndex;
  filterServiceDataCount = 10;

  startDate: Date;
  endDate: Date;
  startDateStr;
  endDateStr;

  isLoading;
  isError;
  errorMessage;

  chartIndex = 0;
  chartStartDate;
  filterChartCount = 9;

  totalStatRecordCount = 0;

  sortDataByDate(dateArray, isDesc: boolean): any {
    if(isDesc){
      dateArray.sort((a, b) => (b.date as any) - (a.date as any));
    } else {
      dateArray.sort((a, b) => (a.date as any) - (b.date as any));  
    }
  }

  moveFilterChartData(dataList, _type) {
    const filterList = [];
    let newChartIndex = this.chartIndex + (this.filterChartCount * _type);
    if(newChartIndex < 0) {
      newChartIndex = 0;
    }
    if(newChartIndex > dataList.length) {
      newChartIndex = dataList.length - 1;
    }
    if(dataList.length > 0) {
      for(let i=newChartIndex; i < dataList.length; i++) {
        if(i > -1) {
          if(filterList.length > (this.filterChartCount - 1)) {
            break;
          }
          filterList.push({y: dataList[i].stat, label: this.getDateStr(dataList[i].date)});
        }
      }
    }
    if(filterList.length > 0 && !this.arraysEqual(filterList, this.chartData) ) {
      this.chartIndex = newChartIndex;
      this.chartData = filterList;
      this.refreshChart();
    }
  }

  arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i].y !== b[i].y) return false;
      if (a[i].label !== b[i].label) return false;
    }
    return true;
  }

  showPreviousChartData() {
    this.moveFilterChartData(this.serviceDataDateMap, -1);
  }

  showNextChartData() {
    this.moveFilterChartData(this.serviceDataDateMap, +1);
  }

  getFilterList(givenDate: Date, dataList) {
    const filterList = [];
    if(dataList.length > 0) {
      this.chartIndex = 0;
      this.chartStartDate = dataList[0].date;
      let chartStartDateGap = Math.abs(dataList[0].date.getTime() - givenDate.getTime());
      if(dataList.length > 1) {
        for(let i=1; i<dataList.length; i++) {
          let dateItem = dataList[i].date;
          let iterDateGap = Math.abs(dateItem.getTime() - givenDate.getTime());
          if(iterDateGap < chartStartDateGap) {
            this.chartIndex = i;
            this.chartStartDate = dataList[i].date;
            chartStartDateGap = iterDateGap;
          }
        }
        for(let i=this.chartIndex; i < dataList.length; i++) {
          if(filterList.length > (this.filterChartCount - 1)) {
            break;
          }
          filterList.push({stat: dataList[i].stat, date: dataList[i].date});
        }

      } else {
        filterList.push({stat: dataList[0].stat, date: this.chartStartDate});
      }
    }
    return filterList;
  }

  initData() {
    this.sortDataByDate(this.serviceData, false);
    if(this.serviceData.length > 0) {
      this.endDate = this.serviceData[this.serviceData.length - 1].date;
      if(this.serviceData.length - 9 > 0) {
        this.startDate = this.serviceData[this.serviceData.length - 9].date;
      } else {
        this.startDate = this.serviceData[0].date;
      }
    } else {
      this.startDate = new Date();
      this.endDate = new Date();
    }
    this.startDateStr = this.getDateStr(this.startDate);
    this.endDateStr = this.getDateStr(this.endDate);

    this.applyFilterAndRefresh();

    if(this.serviceData.length > this.filterServiceDataCount) {
      this.filterServiceData = this.serviceData.slice(0, this.filterServiceDataCount)
    } else {
      this.filterServiceData = this.serviceData;
    }
    this.filterServiceDataIndex = 0;
  }

  updateTablePagination(page, value) {
    let start = page * this.filterServiceDataCount;
    let end = start + this.filterServiceDataCount;
    if(this.serviceData.length > end) {
      if(this.serviceData.slice(start, end).length > 0) {
        this.filterServiceData = this.serviceData.slice(start, end);
        this.filterServiceDataIndex = this.filterServiceDataIndex + value
      }
    } else {
      if(this.serviceData.slice(start, (this.serviceData.length)).length > 0) {
        this.filterServiceData = this.serviceData.slice(start, (this.serviceData.length));
        this.filterServiceDataIndex = this.filterServiceDataIndex + value
      }
    }
  }

  getDateStr(date: Date) {
    let currentDate = date.getDate();
    let currentMonth = (date.getMonth() + 1);
    let year = date.getFullYear()
    let dateStr = currentDate < 10 ? '0' + currentDate : currentDate;
    let monthStr = currentMonth < 10 ? '0' + currentMonth : currentMonth;
    return year + '-' + monthStr  + '-' + dateStr;
  }

  getInitialStartDate() {
    const curDate = new Date();
    const fromDate = new Date();
    fromDate.setDate(curDate.getDate() - 9);
    return this.getDateStr(fromDate);
  }

  applyFilterAndRefresh() {
    this.sortDataByDate(this.serviceDataDateMap, false);
    let filterList = this.getFilterList(new Date(this.startDateStr), this.serviceDataDateMap);
    if(filterList.length > 0) {
      this.startDateStr = this.getDateStr(filterList[0].date);
      this.endDateStr = this.getDateStr(filterList[filterList.length - 1].date);
      this.chartData = [];
      for(let i=0; i<filterList.length; i++) {
        let _item = filterList[i];
        this.chartData.push({ y: _item.stat, label: this.getDateStr(_item.date) })
      }
      this.refreshChart();
    }
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.isError = false;
    this.errorMessage = '';
    this.statService.getStatTotalCount().pipe(
      switchMap( data => {
        if(data && data.count) {
          this.totalStatRecordCount = data.count;
        }
        return this.statService.getAllStatistics();
      })
    ).subscribe({
      next: data => {
        let statItemList = {};
        let _serviceDataDateMap = {};
        if(data && data.records) {
          for(let i in data.records) {
            if(data.records[i]) {
              let date = new Date(data.records[i].createdAt);
              let key = data.records[i].IP + "-" + this.getDateStr(date);
              let stat = 1;
              let statTotalCount = 1;
              if(statItemList[key]) {
                let exisingItem = statItemList[key].stat;
                stat = exisingItem + 1;
              } 
              if(_serviceDataDateMap[this.getDateStr(date)]) {
                let _total = _serviceDataDateMap[this.getDateStr(date)].stat;
                statTotalCount = _total + 1;
              } 
              statItemList[key] = {
                stat: stat, date: new Date(date), ip: data.records[i].IP
              }
              _serviceDataDateMap[this.getDateStr(date)] = {
                stat: statTotalCount, date: new Date(date), ip: data.records[i].IP
              }
            }
          }
        }
        this.serviceData = [];
        this.serviceDataDateMap = [];
        for(let item in statItemList) {
          this.serviceData.push(statItemList[item]);
        }
        for(let item in _serviceDataDateMap) {
          this.serviceDataDateMap.push(_serviceDataDateMap[item]);
        }
        this.initData();
        this.refreshChart();
        this.isLoading = false;
      },
      error: err => {
        this.filterServiceData = [];
        this.isError = true;
        this.errorMessage = err;
        this.isLoading = false;
      }
    })
    
  }

  refreshChart() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "User Stat Chart"
      },
      data: [{
        type: "column",
        dataPoints: this.chartData
      }]
    });
    chart.render();
  }

  showNext() {
    this.updateTablePagination(this.filterServiceDataIndex+1, 1);
  }

  showPrevious() {
    this.updateTablePagination(this.filterServiceDataIndex-1, -1);
  }
}
