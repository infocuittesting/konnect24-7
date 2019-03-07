import { Component, OnInit } from '@angular/core';
import { GeneralconfigurationService } from './generalconfiguration.service';
import { ToasterServiceService } from '../../toaster-service.service';

@Component({
  selector: 'app-generalconfiguration',
  templateUrl: './generalconfiguration.component.html',
  styleUrls: ['./generalconfiguration.component.css'],
  providers: [GeneralconfigurationService]
})
export class GeneralconfigurationComponent implements OnInit {

  constructor(private GeneralconfigurationService: GeneralconfigurationService, private toasterService: ToasterServiceService) { }

  Success(message) {
    //console.log("message",message);
    this.toasterService.success(message);
  }

  public test = false;
  public res = false;
  public credit = false; season = false; market = false; origin = false; rmno = false;
  public alertcode = false; roomclass = false; roomcon = false; maint = false; pay = false; ratecat = false;
  public alertar = false; sourcess = false; depart = false; cance = false; pri = false; wait = false; rooms = false;
  public preftable: any; paytable: any; rctable: any; sstable: any; mktable: any; oritable: any; fotable: any; fltable: any;
  public crdtable: any; restable: any; arttable: any; alertartable: any; sortable: any; cantable: any; mainttable: any;
  public deptable: any; pritable: any; waittable: any; roomtable: any; rmclasstable: any; roomcontable: any; house: any;
  public configscr = []; conf = []; configso = []; confroom = []; confroomcon = []; confpay = []; confrc = [];
  public confss = []; confmk = []; confori = []; confrmno = [];

  ngOnInit() {

    //get preference
    this.GeneralconfigurationService.pref()
      .subscribe((resp: any) => {
        this.preftable = resp.ReturnValue;
      });

    //get credit card 
    this.GeneralconfigurationService.crd()
      .subscribe((resp: any) => {
        this.crdtable = resp.ReturnValue;
      });

    //get reservation Type
    this.GeneralconfigurationService.res()
      .subscribe((resp: any) => {
        this.restable = resp.ReturnValue;
      });

    //get alert code Type
    this.GeneralconfigurationService.art()
      .subscribe((resp: any) => {
        this.arttable = resp.ReturnValue;
      });

    //get alert area Type
    this.GeneralconfigurationService.artar()
      .subscribe((resp: any) => {
        this.alertartable = resp.ReturnValue;
      });

    //get Source
    this.GeneralconfigurationService.sor()
      .subscribe((resp: any) => {
        this.sortable = resp.ReturnValue;
      });

    //get department
    this.GeneralconfigurationService.dep()
      .subscribe((resp: any) => {
        this.deptable = resp.ReturnValue;
      });

    //get cancel
    this.GeneralconfigurationService.can()
      .subscribe((resp: any) => {
        this.cantable = resp.ReturnValue;
      });

    //get Privileges
    this.GeneralconfigurationService.pri()
      .subscribe((resp: any) => {
        this.pritable = resp.ReturnValue;
      });

    // Get waitlist
    this.GeneralconfigurationService.waitlist()
      .subscribe((resp: any) => {
        this.waittable = resp.ReturnValue;
      });

    // Get roomtype
    this.GeneralconfigurationService.roomtype()
      .subscribe((resp: any) => {
        this.roomtable = resp.ReturnValue;
      });

    // Get room class
    this.GeneralconfigurationService.rmclass()
      .subscribe((resp: any) => {
        this.rmclasstable = resp.ReturnValue;
      });

    // Get room condition
    this.GeneralconfigurationService.rmcon()
      .subscribe((resp: any) => {
        this.roomcontable = resp.ReturnValue;
      });

    // Get maintainance
    this.GeneralconfigurationService.maint()
      .subscribe((resp: any) => {
        this.mainttable = resp.ReturnValue;
      });

    // Get Payment
    this.GeneralconfigurationService.pay()
      .subscribe((resp: any) => {
        this.paytable = resp.ReturnValue;
      });

    // Get Payment
    this.GeneralconfigurationService.ratecate()
      .subscribe((resp: any) => {
        this.rctable = resp.Return;
      });

    // Get Season Code
    this.GeneralconfigurationService.seasoncode()
      .subscribe((resp: any) => {
        this.sstable = resp.Return;
      });

    // Get Market Group
    this.GeneralconfigurationService.marketgroup()
      .subscribe((resp: any) => {
        this.mktable = resp.ReturnValue;
      });

    // Get origin code
    this.GeneralconfigurationService.ori()
      .subscribe((resp: any) => {
        this.oritable = resp.ReturnValue;
      });

    // Get origin code
    this.GeneralconfigurationService.fos()
      .subscribe((resp: any) => {
        this.fotable = resp.ReturnValue;
      });
    // Get floor
    this.GeneralconfigurationService.floor()
      .subscribe((resp: any) => {
        this.fltable = resp.ReturnValue;
      });

    //get room config
    this.GeneralconfigurationService.gethousekeepingdata()
      .subscribe((resp: any) => {
        this.house = resp.ReturnValue;
      });
  }



  //insert prefernce
  inpref(param, par) {
    this.GeneralconfigurationService.instpref(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("New Preference is Created");
          this.GeneralconfigurationService.pref()
            .subscribe((resp: any) => {
              this.preftable = resp.ReturnValue;
            });
        }
      });
  }

  //insert credit
  incredit(param, par) {
    this.GeneralconfigurationService.instcredit(param)
      .subscribe((resp: any) => {
        par.rest();
        if (resp.ReturnCode == "RIS") {
          this.Success("The New Credit Card Type is Created");
          this.GeneralconfigurationService.crd()
            .subscribe((resp: any) => {
              this.crdtable = resp.ReturnValue;
            });
        }
      });
  }

  //insert Reservation Type
  inrestype(param, par) {
    this.GeneralconfigurationService.instrestype(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The Reservation Type is Created");
          this.preftable = resp.ReturnValue;
          this.GeneralconfigurationService.res()
            .subscribe((resp: any) => {
              this.restable = resp.ReturnValue;
            });
        }
      });
  }

  //insert alert
  inalert(param, par) {
    this.GeneralconfigurationService.instalert(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The New Alert Code is Created");
          this.preftable = resp.ReturnValue;
          this.GeneralconfigurationService.art()
            .subscribe((resp: any) => {
              this.arttable = resp.ReturnValue;
            });
        }
      });
  }

  //insert alert
  inalertar(param, par) {
    this.GeneralconfigurationService.instalertar(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The New Alert Area is Created");
          this.GeneralconfigurationService.artar()
            .subscribe((resp: any) => {
              this.alertartable = resp.ReturnValue;
            });
        }
      });
  }

  //insert source
  inso(param, par) {
    this.GeneralconfigurationService.instso(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The New Source Code is Added");
          this.GeneralconfigurationService.sor()
            .subscribe((resp: any) => {
              this.sortable = resp.ReturnValue;
            });
        }
      });
  }

  //insert depart
  indept(param, par) {
    this.GeneralconfigurationService.instdept(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The New Deparment Code is Created");
          this.GeneralconfigurationService.dep()
            .subscribe((resp: any) => {
              this.deptable = resp.ReturnValue;
            });
        }
      });
  }

  //insert cancel
  incan(param, par) {
    this.GeneralconfigurationService.instcan(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The New Cancel Code is Created");
          this.GeneralconfigurationService.can()
            .subscribe((resp: any) => {
              this.cantable = resp.ReturnValue;
            });
        }
      });
  }

  //insert privileges
  inpri(param, par) {
    this.GeneralconfigurationService.instpri(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The Privileges is Created");
          this.GeneralconfigurationService.pri()
            .subscribe((resp: any) => {
              this.pritable = resp.ReturnValue;
            });
        }
      });
  }

  //insert waitlist
  inwait(param, par) {
    this.GeneralconfigurationService.instwait(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The waitlist reason is Created");
          this.GeneralconfigurationService.waitlist()
            .subscribe((resp: any) => {
              this.waittable = resp.ReturnValue;
            });
        }
      });
  }

  //insert roomtype
  inroom(param, par) {
    this.GeneralconfigurationService.instroom(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The Room Type is Created");
          this.GeneralconfigurationService.roomtype()
            .subscribe((resp: any) => {
              this.roomtable = resp.ReturnValue;
            });
        }
      });
  }

  //insert room class
  inrmclass(param, par) {
    this.GeneralconfigurationService.instrmclass(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The Room Class is Created");
          this.GeneralconfigurationService.rmclass()
            .subscribe((resp: any) => {
              this.rmclasstable = resp.ReturnValue;
            });
        }
      });
  }

  //insert room class
  inroomcon(param, par) {
    this.GeneralconfigurationService.instrmcon(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The Room Condition is Created");
          this.GeneralconfigurationService.rmcon()
            .subscribe((resp: any) => {
              this.roomcontable = resp.ReturnValue;
            });
        }
      });
  }

  //insert Maintainance
  inmaint(param, par) {
    this.GeneralconfigurationService.instmaint(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The Room Maintainance Reason is Created");
          this.GeneralconfigurationService.maint()
            .subscribe((resp: any) => {
              this.mainttable = resp.ReturnValue;
            });
        }
      });
  }

  //insert Room config
  inrmno(param, par) {
    this.GeneralconfigurationService.instrmno(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The Room Configuration is Done");
          this.GeneralconfigurationService.gethousekeepingdata()
            .subscribe((resp: any) => {
              this.house = resp.ReturnValue;
            });
        }
      });
  }

  //insert Payment
  inpay(param, par) {
    this.GeneralconfigurationService.instpay(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The payment type is Created");
          this.GeneralconfigurationService.pay()
            .subscribe((resp: any) => {
              this.paytable = resp.ReturnValue;
            });
        }
      });
  }

  //insert Room Condition
  inrc(param,par) {
    this.GeneralconfigurationService.instrc(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The Rate Category is Created");
        this.GeneralconfigurationService.ratecate()
          .subscribe((resp: any) => {
            this.rctable = resp.Return;
          });
        }
      });
  }

  //insert Season code
  inss(param,par) {
    this.GeneralconfigurationService.instss(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The New Season Code is Created");
        this.GeneralconfigurationService.seasoncode()
          .subscribe((resp: any) => {
            this.sstable = resp.Return;
          });
        }
      });
  }

  //insert Market
  inmk(param,par) {
    this.GeneralconfigurationService.instmk(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The New Market Code is Created");
        this.GeneralconfigurationService.marketgroup()
          .subscribe((resp: any) => {
            this.mktable = resp.ReturnValue;
          });
        }
      });
  }

  //insert origin code
  inori(param,par) {
    this.GeneralconfigurationService.instori(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The New Origin Code is Created");
        this.GeneralconfigurationService.ori()
          .subscribe((resp: any) => {
            this.oritable = resp.ReturnValue;
          });
        }
      });
  }


  // Show and Hide
  select(para) {
    if (para == "test") {
      this.test = true;
    } else {
      this.test = false;
    }

    if (para == "credit") {
      this.credit = true;
    } else {
      this.credit = false;
    }

    if (para == "res") {
      this.res = true;
    } else {
      this.res = false;
    }

    if (para == "alertcode") {
      this.alertcode = true;
    } else {
      this.alertcode = false;
    }

    if (para == "alertar") {
      this.alertar = true;
    } else {
      this.alertar = false;
    }

    if (para == "sourcess") {
      this.sourcess = true;
    } else {
      this.sourcess = false;
    }

    if (para == "depart") {
      this.depart = true;
    } else {
      this.depart = false;
    }

    if (para == "cance") {
      this.cance = true;
    } else {
      this.cance = false;
    }

    if (para == "pri") {
      this.pri = true;
    } else {
      this.pri = false;
    }

    if (para == "wait") {
      this.wait = true;
    } else {
      this.wait = false;
    }

    if (para == "rooms") {
      this.rooms = true;
    } else {
      this.rooms = false;
    }

    if (para == "roomclass") {
      this.roomclass = true;
    } else {
      this.roomclass = false;
    }

    if (para == "roomcon") {
      this.roomcon = true;
    } else {
      this.roomcon = false;
    }

    if (para == "maint") {
      this.maint = true;
    } else {
      this.maint = false;
    }

    if (para == "pay") {
      this.pay = true;
    } else {
      this.pay = false;
    }

    if (para == "ratecat") {
      this.ratecat = true;
    } else {
      this.ratecat = false;
    }

    if (para == "season") {
      this.season = true;
    } else {
      this.season = false;
    }

    if (para == "market") {
      this.market = true;
    } else {
      this.market = false;
    }

    if (para == "origin") {
      this.origin = true;
    } else {
      this.origin = false;
    }

    if (para == "rmno") {
      this.rmno = true;
    } else {
      this.rmno = false;
    }
  }
  //End Show and Hide

}
