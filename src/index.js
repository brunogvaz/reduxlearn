import React from "react";
import {render} from "react-dom";
import { makeEmptyAggregatedTestResult } from "@jest/test-result";




function Hi(){

  return (<p>Hi </p>) ;
}


render(<Hi/>, document.getElementById('app'));