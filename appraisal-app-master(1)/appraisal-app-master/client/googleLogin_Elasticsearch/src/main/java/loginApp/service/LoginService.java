package loginApp.service;

import loginApp.entity.Login;
import org.springframework.validation.BindingResult;

import java.io.IOException;

public interface LoginService {
    void saveId(Login login, BindingResult bindingResult) throws IOException;
}
