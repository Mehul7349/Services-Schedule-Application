/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */
define(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "text!../departmentData.json", "ojs/ojtable", "ojs/ojknockout"], function (require, exports, ko, ojbootstrap_1, ArrayDataProvider, deptData) {
    function ServicesViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
       this.deptArray = JSON.parse(deptData);
       this.dataprovider = new ArrayDataProvider(this.deptArray, {
           keyAttributes: "DepartmentId",
           implicitSort: [{ attribute: "DepartmentId", direction: "ascending" }],
       });
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return ServicesViewModel;
  }
);
