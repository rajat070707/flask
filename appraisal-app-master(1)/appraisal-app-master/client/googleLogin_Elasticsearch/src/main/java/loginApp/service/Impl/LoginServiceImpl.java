package loginApp.service.Impl;

import io.searchbox.client.JestClient;
import io.searchbox.client.JestResult;
import io.searchbox.core.Index;
import loginApp.entity.Login;
import loginApp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.io.IOException;

@Component
@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    JestClient client;

    @Override
    public void saveId(Login login, BindingResult bindingResult) throws IOException {
        Login source = new Login();
        source.setId(login.getId());
        source.setEmailAddress(login.getEmailAddress());
        Index index = new Index.Builder(source).index("login").type("entities").id(source.getId()).build();
        JestResult result = client.execute(index);
        if(result.isSucceeded()){
            System.out.print("OK");
        }
        else{
            System.out.println("not found");
        }
    }

}
