package loginApp.controller;

import loginApp.entity.Login;
import loginApp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping(value = "/login")
public class LoginController {

    @Autowired
    LoginService loginService;

    @PostMapping(path="/add")
    public void saveId(@Validated @RequestBody Login login , BindingResult bindingResult) throws IOException {
        loginService.saveId(login, bindingResult);
    }

}
