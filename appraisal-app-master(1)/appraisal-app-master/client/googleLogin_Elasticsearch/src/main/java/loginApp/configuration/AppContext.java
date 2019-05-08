package loginApp.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.annotation.Validated;

@Configuration
public class AppContext {
    @Value("${elasticsearch-base-url}")
    private String elasticsearchbaseurl;

    public String getElasticsearchbaseurl() {
        return elasticsearchbaseurl;
    }

    public void setElasticsearchbaseurl(String elasticsearchbaseurl) {
        this.elasticsearchbaseurl = elasticsearchbaseurl;
    }
}
