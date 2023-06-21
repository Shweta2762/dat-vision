import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-landing-page-map',
  templateUrl: './landing-page-map.component.html',
  styleUrls: ['./landing-page-map.component.scss']
})
export class LandingPageMapComponent implements OnInit {

  constructor(private auth: AuthenticationService,) { }

  CURRENT_YEAR = new Date().getFullYear() - 1;
  currentYearEnergy = 0;
  currentYearCost = 0;
  currentYearEmission = 0;

  userRole !: number;
  userBuilding !: number;

  ngOnInit() {

    this.userRole = Number(this.auth.getRoleFromStorage());
    this.userBuilding = Number(this.auth.getBuildingFromStorage());

    this.auth.userDetails().subscribe(data => console.log(data));

    // this.allAssetsEmTvhService.getMonthlySettingsInfo().subscribe((monthlyInfo: GetMonthlySettingsInfoResponse) => {
    //   let chartData: any = {
    //     "name": "TVH",
    //     "series": []
    //   };

    //   const body: GetMonthlySettingsInput = {};
    //   this.allAssetsEmTvhService.getMonthlySettings(body).subscribe((settingsData: GetMonthlySettingsResponse[]) => {
    //     if (monthlyInfo && monthlyInfo.year) {
    //       monthlyInfo.year.forEach((eachYear: number) => {
    //         let energy_sum = 0;
    //         let cost_sum = 0;
    //         settingsData.forEach((eachData) => {
    //           if (eachData.year === eachYear) {
    //             energy_sum = energy_sum + eachData.energyDiff_kWh
    //             cost_sum = cost_sum + (eachData.energyDiff_kWh * eachData.cost_per_kWh)
    //           }
    //         })

    //         if (this.CURRENT_YEAR === eachYear) {
    //           this.currentYearEnergy = energy_sum;
    //           this.currentYearCost = cost_sum;
    //           this.currentYearEmission = (energy_sum * 0.85)
    //         }
    //         chartData.series.push({
    //           name: eachYear + "",
    //           value: energy_sum / 100000, //CONVERT TO LAKH UNITS
    //           costForEnergy: (cost_sum),
    //           avgCost: (cost_sum / energy_sum),
    //           co2Emission: (energy_sum * 0.85)
    //         })
    //       })
    //       chartData.series = [...chartData.series.reverse()]
    //       console.log(chartData);
    //       this.energyChartData.push(chartData);
    //       this.energyChartData = [...this.energyChartData]
    //     }
    //   });

    // })


  }

  view: any[] = [750, 250];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Year';
  legendPosition = 'right';
  showXAxisLabel = true;
  xAxisLabel = 'Energy (Lakh units)';
  showYAxisLabel = false;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: ['rgb(74, 74, 255)', 'rgb(255, 94, 36)']
  };
  schemeType: string = 'ordinal';



  energyChartData: any = [
    // {
    //   "name": "Pacifia",
    //   "series": [
    //     {
    //       "name": "2021",
    //       "value": 730000
    //     },
    //     {
    //       "name": "2020",
    //       "value": 894000
    //     }
    //   ]
    // },

    // {
    //   "name": "TVH",
    //   "series": [
    //     {
    //       "name": "2020",
    //       "value": 129.66
    //     },
    //     {
    //       "name": "2021",
    //       "value": 22.5
    //     },
    //   ]
    // },
  ];

  onSelect(data: any): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  logout() {
    this.auth.logout();
  }

}
