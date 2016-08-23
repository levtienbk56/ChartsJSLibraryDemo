package tienlv.demo.controller;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.stereotype.Controller
public class Controller {

	@RequestMapping(value = "", method = RequestMethod.GET)
	public String home() {
		return "pages/index";
	}

}
