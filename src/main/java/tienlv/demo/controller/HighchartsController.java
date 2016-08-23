package tienlv.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@org.springframework.stereotype.Controller
@RequestMapping(value = "/highcharts")
public class HighchartsController {

	@RequestMapping(value = "/line-charts", method = RequestMethod.GET)
	public String getLineCharts() {
		return "pages/highcharts/line_charts";
	}

	@RequestMapping(value = "/column-charts", method = RequestMethod.GET)
	public String getColumnCharts() {
		return "pages/highcharts/column_charts";
	}
	
	@RequestMapping(value = "/area-charts", method = RequestMethod.GET)
	public String getAreaCharts() {
		return "pages/highcharts/area_charts";
	}

}
